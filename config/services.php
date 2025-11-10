<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Mailgun, Postmark, AWS and more. This file provides the de facto
    | location for this type of information, allowing packages to have
    | a conventional file to locate the various service credentials.
    |
    */

    'postmark' => [
        'token' => env('POSTMARK_TOKEN'),
    ],

    'ses' => [
        'key' => env('AWS_ACCESS_KEY_ID'),
        'secret' => env('AWS_SECRET_ACCESS_KEY'),
        'region' => env('AWS_DEFAULT_REGION', 'us-east-1'),
    ],

    'resend' => [
        'key' => env('RESEND_KEY'),
    ],

    'slack' => [
        'notifications' => [
            'bot_user_oauth_token' => env('SLACK_BOT_USER_OAUTH_TOKEN'),
            'channel' => env('SLACK_BOT_USER_DEFAULT_CHANNEL'),
        ],
    ],

    'hubspot' => [
        'api_key' => env('HUBSPOT_API_KEY'),
        'portal_id' => env('HUBSPOT_PORTAL_ID'),
        'forms' => [
            'contact' => env('HUBSPOT_CONTACT_FORM_GUID'),
            'demo' => env('HUBSPOT_DEMO_FORM_GUID'),
        ],
        'lists' => [
            'demo_requests' => env('HUBSPOT_DEMO_REQUEST_LIST_ID'),
            'contact_us' => env('HUBSPOT_CONTACT_US_LIST_ID'),
        ],
    ],

];
