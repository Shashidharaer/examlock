# HubSpot Integration - Quick Setup Steps

Follow these steps to integrate HubSpot with your ExamLock project.

## 📋 Prerequisites

- HubSpot account (Free or paid)
- Access to HubSpot settings
- Laravel project running

---

## 🚀 Quick Setup (5 Steps)

### Step 1: Install Guzzle HTTP Client

```bash
composer require guzzlehttp/guzzle
```

### Step 2: Get HubSpot Credentials

#### Option A: Using Private App (Recommended - More Secure)

1. Go to your HubSpot account
2. Navigate to **Settings** (⚙️) → **Integrations** → **Private Apps**
3. Click **Create a private app**
4. Give it a name: "ExamLock Form Integration"
5. Under **Scopes**, select:
   - ✅ `crm.objects.contacts.write`
   - ✅ `crm.objects.contacts.read`
   - ✅ `forms`
6. Click **Create app**
7. Copy the **Access Token** (this is your API key)

#### Option B: Using API Key (Legacy - Simpler)

1. Go to **Settings** → **Integrations** → **API Key**
2. Click **Create key** (or use existing one)
3. Copy the API key

#### Get Your Portal ID

1. In HubSpot, go to **Settings** → **Account Defaults**
2. Find your **Hub ID** (this is your Portal ID)

### Step 3: Create Forms in HubSpot

#### For Contact Form:
1. Go to **Marketing** → **Forms**
2. Click **Create form**
3. Choose **Embedded form**
4. Add fields: `Email`, `Phone`, `Message`
5. Click **Publish**
6. Go to **Share** → **Embed code**
7. Copy the Form GUID from the code (looks like: `formId: '12345678-1234-1234-1234-123456789abc'`)

#### For Demo Request Form:
1. Create another form
2. Add fields: `Email`, `First Name`, `Last Name`, `Company`
3. Publish and get the Form GUID

### Step 4: Configure Environment Variables

Add these lines to your `.env` file:

```env
HUBSPOT_API_KEY=your-access-token-here
HUBSPOT_PORTAL_ID=your-hub-id-here
HUBSPOT_CONTACT_FORM_GUID=your-contact-form-guid
HUBSPOT_DEMO_FORM_GUID=your-demo-form-guid
```

**Example:**
```env
HUBSPOT_API_KEY=pat-na1-12345678-1234-1234-1234-123456789abc
HUBSPOT_PORTAL_ID=12345678
HUBSPOT_CONTACT_FORM_GUID=a1b2c3d4-e5f6-7890-abcd-ef1234567890
HUBSPOT_DEMO_FORM_GUID=b2c3d4e5-f6a7-8901-bcde-f12345678901
```

### Step 5: Update Your FormController

Replace your existing `FormController.php` with the HubSpot-enabled version:

```bash
# Backup your current controller
cp app/Http/Controllers/FormController.php app/Http/Controllers/FormController.backup.php

# Replace with the new version
cp app/Http/Controllers/FormControllerWithHubSpot.php app/Http/Controllers/FormController.php
```

**Or manually update** by adding HubSpot service injection and calls (see `FormControllerWithHubSpot.php` for reference).

---

## ✅ Test the Integration

### 1. Clear Cache
```bash
php artisan config:clear
php artisan cache:clear
```

### 2. Test a Form Submission

1. Start your dev server:
   ```bash
   npm run dev
   php artisan serve
   ```

2. Open your site and submit the "Request Demo" form

3. Check HubSpot:
   - Go to **Contacts** → **Contacts**
   - Search for the email you submitted
   - You should see a new contact!

### 3. Check Logs

```bash
tail -f storage/logs/laravel.log | grep HubSpot
```

You should see:
- ✅ "HubSpot form submission successful"
- Or ⚠️ Error messages if something went wrong

---

## 🎯 Verify Form Field Mapping

Make sure HubSpot form fields match your Laravel form:

### Contact Form:
| Laravel Field | HubSpot Property |
|--------------|------------------|
| `email` | `email` |
| `phone` | `phone` |
| `your_address` | `message` |

### Demo Request Form:
| Laravel Field | HubSpot Property |
|--------------|------------------|
| `email` | `email` |
| `name` | `firstname` + `lastname` |
| `company` | `company` |

---

## 🔧 Troubleshooting

### Issue: "401 Unauthorized"
- ✅ Check your API key is correct
- ✅ Verify the API key has proper scopes
- ✅ Run `php artisan config:clear`

### Issue: "404 Form not found"
- ✅ Verify Form GUID is correct
- ✅ Make sure form is published in HubSpot
- ✅ Check Portal ID is correct

### Issue: "No data appearing in HubSpot"
- ✅ Check logs: `tail -f storage/logs/laravel.log`
- ✅ Verify form fields match HubSpot properties
- ✅ Test with HubSpot's API testing tool

### Issue: Forms still work but no HubSpot sync
- ✅ This is expected! The integration fails gracefully
- ✅ Data still saves to Statamic
- ✅ Check logs for error details

---

## 📊 Advanced Configuration

### Add UTM Tracking

UTM parameters are automatically captured if present in URL:
- `?utm_source=google&utm_medium=cpc&utm_campaign=spring-sale`

No code changes needed - it's already in `FormControllerWithHubSpot.php`!

### Add Contacts to Lists

To automatically add contacts to HubSpot lists:

```php
// In FormController, after successful submission
if ($hubspotSuccess) {
    $listId = config('services.hubspot.lists.demo_requests');
    $this->hubspot->addContactToList($validated['email'], $listId);
}
```

### Create HubSpot Workflows

1. Go to **Automation** → **Workflows** in HubSpot
2. Create workflow triggered by form submission
3. Add actions:
   - Send email notification
   - Create deal
   - Assign to sales rep
   - Add to nurture sequence

---

## 📚 Resources

- [Full Integration Guide](./HUBSPOT_INTEGRATION_GUIDE.md)
- [HubSpot API Documentation](https://developers.hubspot.com/docs/api/overview)
- [HubSpot Forms API](https://developers.hubspot.com/docs/api/marketing/forms)

---

## 🎉 You're Done!

Your ExamLock forms are now integrated with HubSpot. Every form submission will:

1. ✅ Submit to HubSpot
2. ✅ Save in Statamic (as backup)
3. ✅ Send configured emails
4. ✅ Log the action
5. ✅ Show success message to user

Need help? Check the [Full Integration Guide](./HUBSPOT_INTEGRATION_GUIDE.md) for more details!
