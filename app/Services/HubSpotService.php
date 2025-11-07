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
                    'hutk' => request()->cookie('hubspotutk'), // HubSpot tracking cookie
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
                'fields' => array_keys($fields),
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
     * Create or update a contact in HubSpot using Contacts API
     * This provides more direct control than form submissions
     *
     * @param array $properties Contact properties ['email' => 'test@example.com', 'firstname' => 'John']
     * @return bool Success status
     */
    public function createOrUpdateContact(array $properties): bool
    {
        try {
            $client = new Client([
                'base_uri' => 'https://api.hubapi.com/',
                'timeout' => 10,
            ]);

            // First, try to create a new contact
            $response = $client->post('crm/v3/objects/contacts', [
                'json' => ['properties' => $properties],
                'headers' => [
                    'Authorization' => "Bearer {$this->apiKey}",
                    'Content-Type' => 'application/json',
                ],
            ]);

            Log::info('HubSpot contact created', [
                'status_code' => $response->getStatusCode(),
                'email' => $properties['email'] ?? 'unknown',
            ]);

            return $response->getStatusCode() === 201 || $response->getStatusCode() === 200;

        } catch (GuzzleException $e) {
            // If contact already exists (409 Conflict), try to update it
            if ($e->getCode() === 409 && isset($properties['email'])) {
                return $this->updateContactByEmail($properties['email'], $properties);
            }

            Log::error('HubSpot contact creation failed', [
                'error' => $e->getMessage(),
                'code' => $e->getCode(),
            ]);

            return false;
        }
    }

    /**
     * Update an existing contact by email
     *
     * @param string $email Contact email
     * @param array $properties Properties to update
     * @return bool Success status
     */
    protected function updateContactByEmail(string $email, array $properties): bool
    {
        try {
            $client = new Client([
                'base_uri' => 'https://api.hubapi.com/',
                'timeout' => 10,
            ]);

            // Search for contact by email
            $searchResponse = $client->post('crm/v3/objects/contacts/search', [
                'json' => [
                    'filterGroups' => [
                        [
                            'filters' => [
                                [
                                    'propertyName' => 'email',
                                    'operator' => 'EQ',
                                    'value' => $email,
                                ],
                            ],
                        ],
                    ],
                ],
                'headers' => [
                    'Authorization' => "Bearer {$this->apiKey}",
                    'Content-Type' => 'application/json',
                ],
            ]);

            $searchData = json_decode($searchResponse->getBody(), true);

            if (empty($searchData['results'])) {
                Log::warning('HubSpot contact not found for update', ['email' => $email]);
                return false;
            }

            $contactId = $searchData['results'][0]['id'];

            // Update the contact
            $response = $client->patch("crm/v3/objects/contacts/{$contactId}", [
                'json' => ['properties' => $properties],
                'headers' => [
                    'Authorization' => "Bearer {$this->apiKey}",
                    'Content-Type' => 'application/json',
                ],
            ]);

            Log::info('HubSpot contact updated', [
                'contact_id' => $contactId,
                'email' => $email,
            ]);

            return $response->getStatusCode() === 200;

        } catch (GuzzleException $e) {
            Log::error('HubSpot contact update failed', [
                'email' => $email,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }

    /**
     * Add a contact to a specific list
     *
     * @param string $email Contact email
     * @param int $listId HubSpot list ID
     * @return bool Success status
     */
    public function addContactToList(string $email, int $listId): bool
    {
        try {
            $client = new Client([
                'base_uri' => 'https://api.hubapi.com/',
                'timeout' => 10,
            ]);

            $response = $client->put("contacts/v1/lists/{$listId}/add", [
                'json' => [
                    'emails' => [$email],
                ],
                'headers' => [
                    'Authorization' => "Bearer {$this->apiKey}",
                    'Content-Type' => 'application/json',
                ],
            ]);

            Log::info('HubSpot contact added to list', [
                'email' => $email,
                'list_id' => $listId,
            ]);

            return $response->getStatusCode() === 200;

        } catch (GuzzleException $e) {
            Log::error('Failed to add contact to HubSpot list', [
                'email' => $email,
                'list_id' => $listId,
                'error' => $e->getMessage(),
            ]);

            return false;
        }
    }
}
