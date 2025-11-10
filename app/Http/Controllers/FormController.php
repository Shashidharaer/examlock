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
        try {
            $hubspotFields = [
                'email' => $validated['email'],
                'phone' => $validated['phone'],
                'message' => $validated['your_address'],
            ];

            // Get form GUID from config
            $formGuid = config('services.hubspot.forms.contact');
            
            if ($formGuid) {
                $hubspotSuccess = $this->hubspot->submitForm($formGuid, $hubspotFields);

                if ($hubspotSuccess) {
                    Log::info('Contact form submitted to HubSpot successfully', [
                        'email' => $validated['email'],
                    ]);
                } else {
                    Log::warning('HubSpot submission failed but continuing with Statamic save', [
                        'email' => $validated['email'],
                    ]);
                }
            } else {
                Log::info('HubSpot contact form GUID not configured, skipping HubSpot submission');
            }
        } catch (\Exception $e) {
            Log::error('HubSpot submission exception', [
                'error' => $e->getMessage(),
                'email' => $validated['email'],
            ]);
        }

        // Get the Statamic form
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
        try {
            // Split name into first and last name
            $nameParts = explode(' ', $validated['name'], 2);
            $firstName = $nameParts[0];
            $lastName = $nameParts[1] ?? '';

            $hubspotFields = [
                'email' => $validated['email'],
                'firstname' => $firstName,
                'lastname' => $lastName,
                'company' => $validated['company'],
            ];

            // Get form GUID from config
            $formGuid = config('services.hubspot.forms.demo');
            
            if ($formGuid) {
                // Add UTM parameters if present
                $context = [];
                if ($request->has('utm_source')) {
                    $context['utm_source'] = $request->get('utm_source');
                }
                if ($request->has('utm_medium')) {
                    $context['utm_medium'] = $request->get('utm_medium');
                }
                if ($request->has('utm_campaign')) {
                    $context['utm_campaign'] = $request->get('utm_campaign');
                }

                $hubspotSuccess = $this->hubspot->submitForm($formGuid, $hubspotFields, $context);

                if ($hubspotSuccess) {
                    Log::info('Demo request submitted to HubSpot successfully', [
                        'email' => $validated['email'],
                        'company' => $validated['company'],
                    ]);
                } else {
                    Log::warning('HubSpot submission failed but continuing with Statamic save', [
                        'email' => $validated['email'],
                    ]);
                }
            } else {
                Log::info('HubSpot demo form GUID not configured, skipping HubSpot submission');
            }
        } catch (\Exception $e) {
            Log::error('HubSpot submission exception', [
                'error' => $e->getMessage(),
                'email' => $validated['email'],
            ]);
        }

        // Get the Statamic form
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
