# HubSpot Form Integration Guide

## Overview
This guide explains how to integrate HubSpot CRM with your ExamLock project to capture form submissions from both the "Request Demo" and "Contact Us" forms.

## Integration Approaches

### 🎯 Recommended Approach: HubSpot Forms API (Server-Side)

This approach sends data from your Laravel backend to HubSpot's API, giving you full control and security.

### Alternative Approach: HubSpot Embed Forms (Client-Side)

Use HubSpot's native embedded forms directly in your React components.

---

## Option 1: HubSpot Forms API Integration (Recommended)

### Step 1: Install HTTP Client Package

```bash
composer require guzzlehttp/guzzle
```

### Step 2: Get Your HubSpot Credentials

1. Log in to your **HubSpot account**
2. Go to **Settings** → **Integrations** → **API Key** (or use Private Apps for better security)
3. Create a **Private App** with these scopes:
   - `crm.objects.contacts.write`
   - `forms`
4. Copy your **Access Token**

### Step 3: Add HubSpot Configuration to `.env`

```env
HUBSPOT_API_KEY=your-api-key-here
HUBSPOT_PORTAL_ID=your-portal-id
HUBSPOT_CONTACT_FORM_GUID=your-contact-form-guid
HUBSPOT_DEMO_FORM_GUID=your-demo-form-guid
```

**To find your Form GUIDs:**
1. Go to **Marketing** → **Forms** in HubSpot
2. Open your form
3. Click **Share** → **Embed code**
4. The GUID is in the URL: `formId: 'YOUR-FORM-GUID'`

### Step 4: Create HubSpot Service Class

Create `app/Services/HubSpotService.php`:

```php
<?php

namespace App\Services;

use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Support\Facades\Log;

class HubSpotService
{
    protected $client;
    protected $portalId;
    protected $apiKey;

    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => 'https://api.hsforms.com/submissions/v3/integration/',
            'timeout' => 10,
        ]);

        $this->portalId = config('services.hubspot.portal_id');
        $this->apiKey = config('services.hubspot.api_key');
    }

    /**
     * Submit form data to HubSpot
     *
     * @param string $formGuid The HubSpot form GUID
     * @param array $fields Array of form fields ['name' => 'value']
     * @param array $context Additional context (optional)
     * @return bool Success status
     */
    public function submitForm(string $formGuid, array $fields, array $context = []): bool
    {
        try {
            $url = "submit/{$this->portalId}/{$formGuid}";

            // Format fields for HubSpot API
            $formattedFields = [];
            foreach ($fields as $name => $value) {
                $formattedFields[] = [
                    'name' => $name,
                    'value' => $value,
                ];
            }

            $payload = [
                'fields' => $formattedFields,
                'context' => array_merge([
                    'pageUri' => request()->url(),
                    'pageName' => request()->path(),
                ], $context),
            ];

            $response = $this->client->post($url, [
                'json' => $payload,
                'headers' => [
                    'Content-Type' => 'application/json',
                ],
            ]);

            Log::info('HubSpot form submission successful', [
                'form_guid' => $formGuid,
                'status_code' => $response->getStatusCode(),
            ]);

            return $response->getStatusCode() === 200;

        } catch (GuzzleException $e) {
            Log::error('HubSpot form submission failed', [
                'form_guid' => $formGuid,
                'error' => $e->getMessage(),
                'code' => $e->getCode(),
            ]);

            return false;
        }
    }

    /**
     * Create or update a contact in HubSpot
     * This uses the Contacts API for more direct control
     */
    public function createOrUpdateContact(array $properties): bool
    {
        try {
            $client = new Client([
                'base_uri' => 'https://api.hubapi.com/',
                'timeout' => 10,
            ]);

            $response = $client->post('crm/v3/objects/contacts', [
                'json' => ['properties' => $properties],
                'headers' => [
                    'Authorization' => "Bearer {$this->apiKey}",
                    'Content-Type' => 'application/json',
                ],
            ]);

            return $response->getStatusCode() === 201 || $response->getStatusCode() === 200;

        } catch (GuzzleException $e) {
            // If contact exists, try to update
            if ($e->getCode() === 409) {
                return $this->updateContactByEmail($properties);
            }

            Log::error('HubSpot contact creation failed', [
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }

    /**
     * Update contact by email
     */
    protected function updateContactByEmail(array $properties): bool
    {
        // Implementation for updating existing contact
        // This is a simplified version - you'd need to search by email first
        return false;
    }
}
```

### Step 5: Update Configuration

Add to `config/services.php`:

```php
'hubspot' => [
    'api_key' => env('HUBSPOT_API_KEY'),
    'portal_id' => env('HUBSPOT_PORTAL_ID'),
    'forms' => [
        'contact' => env('HUBSPOT_CONTACT_FORM_GUID'),
        'demo' => env('HUBSPOT_DEMO_FORM_GUID'),
    ],
],
```

### Step 6: Update FormController

Update `app/Http/Controllers/FormController.php`:

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Statamic\Facades\Form;
use App\Services\HubSpotService;
use Illuminate\Support\Facades\Log;

class FormController extends Controller
{
    protected $hubspot;

    public function __construct(HubSpotService $hubspot)
    {
        $this->hubspot = $hubspot;
    }

    /**
     * Handle the contact form submission.
     */
    public function submitContactForm(Request $request)
    {
        // Validate the form data
        $validated = $request->validate([
            'phone' => 'required|string',
            'email' => 'required|email',
            'your_address' => 'required|string',
        ]);

        // Check honeypot (if filled, it's spam)
        if ($request->filled('honeypot')) {
            return back()->with('success', 'Thank you for your submission!');
        }

        // Submit to HubSpot
        $hubspotFields = [
            'email' => $validated['email'],
            'phone' => $validated['phone'],
            'message' => $validated['your_address'],
        ];

        $formGuid = config('services.hubspot.forms.contact');
        $hubspotSuccess = $this->hubspot->submitForm($formGuid, $hubspotFields);

        if (!$hubspotSuccess) {
            Log::warning('HubSpot submission failed but continuing with Statamic save');
        }

        // Get the Statamic form (keep existing functionality)
        $form = Form::find('contact_us');

        if ($form) {
            // Create a submission in Statamic
            $submission = $form->makeSubmission();
            $submission->data($validated);
            $submission->save();

            // Send any configured emails
            if ($form->email()) {
                foreach ($form->email() as $email) {
                    \Statamic\Facades\Email::send($email, $submission);
                }
            }
        }

        // Return back with success message (Inertia response)
        return back()->with('success', 'Thank you for your message! We\'ll be in touch soon.');
    }

    /**
     * Handle the request demo form submission.
     */
    public function submitRequestDemo(Request $request)
    {
        // Validate the form data
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'company' => 'required|string|max:255',
        ]);

        // Check honeypot (if filled, it's spam)
        if ($request->filled('honeypot')) {
            return back()->with('success', 'Thank you for your demo request!');
        }

        // Submit to HubSpot
        $hubspotFields = [
            'email' => $validated['email'],
            'firstname' => $validated['name'],
            'company' => $validated['company'],
        ];

        $formGuid = config('services.hubspot.forms.demo');
        $hubspotSuccess = $this->hubspot->submitForm($formGuid, $hubspotFields);

        if (!$hubspotSuccess) {
            Log::warning('HubSpot submission failed but continuing with Statamic save');
        }

        // Get the Statamic form (keep existing functionality)
        $form = Form::find('request_demo');

        if ($form) {
            // Create a submission in Statamic
            $submission = $form->makeSubmission();
            $submission->data($validated);
            $submission->save();

            // Send any configured emails
            if ($form->email()) {
                foreach ($form->email() as $email) {
                    \Statamic\Facades\Email::send($email, $submission);
                }
            }
        }

        // Return back with success message (Inertia response)
        return back()->with('success', 'Thank you for requesting a demo! We\'ll be in touch soon.');
    }
}
```

---

## Option 2: HubSpot Embedded Forms (Client-Side)

### Step 1: Add HubSpot Script to app.blade.php

Update `resources/views/app.blade.php`:

```blade
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" @class(['dark' => ($appearance ?? 'system') == 'dark'])>
    <head>
        <!-- ... existing head content ... -->
        
        <!-- HubSpot Tracking Code (Optional - for analytics) -->
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/YOUR_HUB_ID.js"></script>
        
        @viteReactRefresh
        @vite(['resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
```

### Step 2: Create HubSpot Form Hook

Create `resources/js/hooks/useHubSpotForm.ts`:

```typescript
import { useEffect } from 'react';

interface HubSpotFormConfig {
    portalId: string;
    formId: string;
    target: string;
    onFormSubmit?: (form: any) => void;
    onFormReady?: (form: any) => void;
}

export const useHubSpotForm = (config: HubSpotFormConfig) => {
    useEffect(() => {
        // Check if HubSpot script is loaded
        if (typeof window !== 'undefined' && (window as any).hbspt) {
            (window as any).hbspt.forms.create({
                region: "na1",
                portalId: config.portalId,
                formId: config.formId,
                target: config.target,
                onFormSubmit: config.onFormSubmit,
                onFormReady: config.onFormReady,
            });
        } else {
            // Wait for HubSpot script to load
            const interval = setInterval(() => {
                if ((window as any).hbspt) {
                    clearInterval(interval);
                    (window as any).hbspt.forms.create({
                        region: "na1",
                        portalId: config.portalId,
                        formId: config.formId,
                        target: config.target,
                        onFormSubmit: config.onFormSubmit,
                        onFormReady: config.onFormReady,
                    });
                }
            }, 100);

            return () => clearInterval(interval);
        }
    }, [config]);
};
```

### Step 3: Update RequestDemo Component (Alternative)

If using embedded forms, create `resources/js/components/common/RequestDemoHubSpot.tsx`:

```tsx
import { useState } from 'react';
import { useHubSpotForm } from '@/hooks/useHubSpotForm';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function RequestDemoHubSpot() {
  const [isOpen, setIsOpen] = useState(false);

  // Initialize HubSpot form when dialog opens
  useHubSpotForm({
    portalId: "YOUR_PORTAL_ID",
    formId: "YOUR_FORM_ID",
    target: "#hubspot-form-container",
    onFormSubmit: () => {
      console.log("Form submitted!");
      setTimeout(() => setIsOpen(false), 2000);
    },
  });

  return (
    <div className="max-sm:w-full">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild className="max-sm:w-full">
          <Button size="lg" className="text-xs sm:text-sm sm:w-[150px]">
            Book a Demo
          </Button>
        </DialogTrigger>

        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="bg-primary text-white px-6 py-4 -m-6 mb-6">
            <DialogTitle className="text-xl font-medium">
              Request a Demo
            </DialogTitle>
          </DialogHeader>

          {/* HubSpot Form Container */}
          <div id="hubspot-form-container" className="px-2"></div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
```

---

## Field Mapping

### Contact Form Mapping

| Your Form Field | HubSpot Property | Type |
|----------------|------------------|------|
| `email` | `email` | Email |
| `phone` | `phone` | Phone |
| `your_address` | `message` or custom | Text |

### Request Demo Form Mapping

| Your Form Field | HubSpot Property | Type |
|----------------|------------------|------|
| `name` | `firstname` | Text |
| `email` | `email` | Email |
| `company` | `company` | Text |

---

## Testing the Integration

### 1. Test in Development

```bash
# Add test credentials to .env
HUBSPOT_API_KEY=test-key
HUBSPOT_PORTAL_ID=test-portal
HUBSPOT_CONTACT_FORM_GUID=test-guid
HUBSPOT_DEMO_FORM_GUID=test-guid

# Run your app
npm run dev
php artisan serve
```

### 2. Submit Test Forms

- Open the request demo modal
- Fill in test data
- Check your HubSpot portal for the submission
- Check Laravel logs: `tail -f storage/logs/laravel.log`

### 3. Monitor HubSpot Dashboard

1. Go to **Contacts** → **Contacts** in HubSpot
2. Search for your test email
3. View the contact's timeline to see form submissions

---

## Error Handling & Logging

The integration includes comprehensive error handling:

- ✅ Continues to save in Statamic even if HubSpot fails
- ✅ Logs all HubSpot API errors
- ✅ Returns success to user regardless of HubSpot status
- ✅ Includes honeypot spam protection

View logs:
```bash
tail -f storage/logs/laravel.log | grep HubSpot
```

---

## Advanced Features

### Adding UTM Parameters

Track marketing campaigns by capturing UTM parameters:

```php
// In FormController
$context = [
    'hutk' => $request->cookie('hubspotutk'), // HubSpot tracking cookie
];

if ($request->has(['utm_source', 'utm_medium', 'utm_campaign'])) {
    $context['utm_source'] = $request->get('utm_source');
    $context['utm_medium'] = $request->get('utm_medium');
    $context['utm_campaign'] = $request->get('utm_campaign');
}

$this->hubspot->submitForm($formGuid, $hubspotFields, $context);
```

### Custom Contact Properties

Add custom fields in HubSpot:

1. Go to **Settings** → **Properties**
2. Create custom properties
3. Map them in your form submission

```php
$hubspotFields = [
    'email' => $validated['email'],
    'firstname' => $validated['name'],
    'company' => $validated['company'],
    'custom_field_name' => $validated['custom_value'], // Your custom field
];
```

---

## Best Practices

1. **Use Private Apps** instead of API keys for better security
2. **Log all submissions** for debugging and audit trails
3. **Keep Statamic as backup** in case HubSpot is down
4. **Test thoroughly** in a HubSpot sandbox account first
5. **Monitor submission rates** to catch integration issues early
6. **Use webhooks** if you need real-time HubSpot → Laravel sync

---

## Troubleshooting

### Issue: "Form not found in HubSpot"
- ✅ Verify your Form GUID is correct
- ✅ Check the form is published in HubSpot
- ✅ Ensure API credentials have form submission permissions

### Issue: "Contact already exists"
- ✅ HubSpot will update the existing contact automatically
- ✅ Make sure email deduplication is enabled

### Issue: "API rate limit exceeded"
- ✅ HubSpot free tier: 250 API calls/day
- ✅ Upgrade to Professional for higher limits
- ✅ Implement request queuing if needed

### Issue: "CORS errors" (for client-side approach)
- ✅ Add your domain to HubSpot's allowed domains
- ✅ Settings → Website → Domains & URLs

---

## Resources

- [HubSpot Forms API Documentation](https://developers.hubspot.com/docs/api/marketing/forms)
- [HubSpot Contacts API](https://developers.hubspot.com/docs/api/crm/contacts)
- [HubSpot API Rate Limits](https://developers.hubspot.com/docs/api/usage-details)
- [Laravel HTTP Client](https://laravel.com/docs/http-client)

---

## Next Steps

1. ✅ Install Guzzle HTTP client
2. ✅ Get HubSpot credentials
3. ✅ Create HubSpot forms in your portal
4. ✅ Add configuration to `.env`
5. ✅ Create `HubSpotService` class
6. ✅ Update `FormController`
7. ✅ Test with sample data
8. ✅ Monitor submissions in HubSpot
9. ✅ Set up email notifications in HubSpot
10. ✅ Configure workflows and automation
