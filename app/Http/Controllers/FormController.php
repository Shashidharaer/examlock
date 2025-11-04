<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Statamic\Facades\Form;

class FormController extends Controller
{
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
