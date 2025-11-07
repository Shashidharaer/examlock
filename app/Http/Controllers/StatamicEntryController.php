<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Statamic\Facades\Entry;
use Statamic\Facades\GlobalSet;
use Statamic\Facades\Site as StatamicSite;
use Statamic\Facades\Asset as StatamicAsset;
use Statamic\Facades\Nav;
use Statamic\Entries\Entry as EntryModel;
use Statamic\Structures\Nav as Navigation;

class StatamicEntryController extends Controller
{
    /**
     * Display a Statamic entry using Inertia.
     */
    public function show(string $collection, string $slug): Response
    {
        // Get the entry from Statamic
        $entry = Entry::query()
            ->where('collection', $collection)
            ->where('slug', $slug)
            ->first();

        // Handle 404
        if (! $entry) {
            abort(404);
        }

        // Get all entry data
        $entryData = $this->transformEntry($entry);
        
        // Get navigation data
        $navigationData = $this->getNavigationData();

        // Render with Inertia
        return Inertia::render('index', [
            'entry' => $entryData,
            'navigation' => $navigationData,
            'branding' => $this->getBrandingData(),
        ]);
    }

    /**
     * Transform and render an entry (useful for custom routes).
     */
    public function transformAndRender(EntryModel $entry): Response
    {
        $entryData = $this->transformEntry($entry);
        
        // Get navigation data
        $navigationData = $this->getNavigationData();
        
        return Inertia::render('index', [
            'entry' => $entryData,
            'navigation' => $navigationData,
            'branding' => $this->getBrandingData(),
        ]);
    }

    /**
     * Transform a Statamic entry into an array suitable for Inertia.
     */
    protected function transformEntry(EntryModel $entry): array
    {
        return [
            'id' => $entry->id(),
            'title' => $entry->value('title'),
            'slug' => $entry->slug(),
            'collection' => $entry->collectionHandle(),
            'url' => $entry->url(),
            'published' => $entry->published(),
            'status' => $entry->status(),
            'date' => $entry->date()?->toIso8601String(),
            
            // Get all augmented field values
            'content' => $entry->toAugmentedArray(),
            
            // Get raw field values (without augmentation)
            'data' => $entry->data()->all(),
            
            // Blueprint information
            'blueprint' => [
                'handle' => $entry->blueprint()->handle(),
                'title' => $entry->blueprint()->title(),
            ],
            
            // Additional metadata
            'meta' => [
                'last_modified' => $entry->lastModified()?->toIso8601String(),
                'locale' => $entry->locale(),
                'site' => $entry->site()->handle(),
            ],
        ];
    }

    /**
     * Get navigation data from Statamic.
     */
    protected function getNavigationData(): array
    {
        $navigationData = [];

        try {
            // Get all navigation menus
            $allNavs = Nav::all();
            
            \Log::info('Found ' . count($allNavs) . ' navigation menus: ' . implode(', ', $allNavs->map(fn($nav) => $nav->handle())->toArray()));

            foreach ($allNavs as $nav) {
                $handle = $nav->handle();
                \Log::info("Processing navigation: {$handle}");
                
                $transformed = $this->transformNavigation($nav);
                $navigationData[$handle] = $transformed;
                
                // Also set common aliases
                if ($handle === 'header') {
                    $navigationData['main'] = $transformed;
                }
            }
            
            \Log::info('Navigation data keys: ' . implode(', ', array_keys($navigationData)));
            
        } catch (\Exception $e) {
            // Log error but don't break the page
            \Log::error('Failed to load navigation data: ' . $e->getMessage());
            \Log::error('Stack trace: ' . $e->getTraceAsString());
        }

        return $navigationData;
    }

    /**
     * Get branding data (e.g., logo) from Statamic Globals.
     */
    protected function getBrandingData(): array
    {
        try {
            $set = GlobalSet::findByHandle('branding');
            if (! $set) {
                \Log::info('Branding globals not found.');
                return [];
            }

            $siteHandle = StatamicSite::current()->handle();
            $globals = $set->in($siteHandle);
            if (! $globals) {
                return [];
            }

            $data = $globals->data()->all();

            // Try to resolve the logo asset regardless of how it's stored
            $logoAsset = null;

            try {
                $augmented = $globals->augmentedValue('logo');
                $resolved = method_exists($augmented, 'value') ? $augmented->value() : (method_exists($augmented, 'resolve') ? $augmented->resolve() : null);

                if ($resolved instanceof \Statamic\Assets\Asset) {
                    $logoAsset = $resolved;
                } elseif (is_array($resolved) && isset($resolved[0]) && $resolved[0] instanceof \Statamic\Assets\Asset) {
                    $logoAsset = $resolved[0];
                }
            } catch (\Throwable $e) {
                // Fallback to raw data resolution
            }

            if (! $logoAsset) {
                $rawLogo = $data['logo'] ?? null;
                if (is_string($rawLogo)) {
                    $logoAsset = StatamicAsset::find($rawLogo);
                } elseif (is_array($rawLogo) && isset($rawLogo[0])) {
                    $logoAsset = StatamicAsset::find($rawLogo[0]);
                }
            }

            $logo = null;
            if ($logoAsset) {
                $logo = [
                    'url' => $logoAsset->url(),
                    'permalink' => method_exists($logoAsset, 'absoluteUrl') ? $logoAsset->absoluteUrl() : $logoAsset->url(),
                    'alt' => $logoAsset->get('alt') ?? 'Logo',
                    'width' => method_exists($logoAsset, 'width') ? $logoAsset->width() : null,
                    'height' => method_exists($logoAsset, 'height') ? $logoAsset->height() : null,
                    'id' => $logoAsset->id(),
                ];
            }

            return [
                'logo' => $logo,
            ];
        } catch (\Throwable $e) {
            \Log::error('Failed to load branding data: ' . $e->getMessage());
            return [];
        }
    }

    /**
     * Transform a Statamic navigation into an array suitable for Inertia.
     */
    protected function transformNavigation(Navigation $navigation): array
    {
        try {
            // Get the structure from the navigation
            $structure = $navigation->in(\Statamic\Facades\Site::default()->handle());
            $tree = $structure ? $structure->tree() : [];
            
            \Log::info("Navigation '{$navigation->handle()}' tree count: " . count($tree));
            
            $transformed = [
                'title' => $navigation->title(),
                'handle' => $navigation->handle(),
                'tree' => $this->transformNavTree($tree),
            ];
            
            \Log::info("Transformed navigation '{$navigation->handle()}': " . json_encode($transformed));
            
            return $transformed;
        } catch (\Exception $e) {
            \Log::error("Error transforming navigation '{$navigation->handle()}': " . $e->getMessage());
            return [
                'title' => $navigation->title(),
                'handle' => $navigation->handle(),
                'tree' => [],
            ];
        }
    }

    /**
     * Transform navigation tree items recursively.
     */
    protected function transformNavTree($tree): array
    {
        try {
            $transformed = [];
            
            foreach ($tree as $item) {
                try {
                    $itemId = $item['id'] ?? null;
                    $entryId = $item['entry'] ?? null;
                    
                    if (!$entryId) {
                        \Log::warning("Navigation item {$itemId} has no entry reference");
                        continue;
                    }
                    
                    // Find the entry
                    $entry = \Statamic\Facades\Entry::find($entryId);
                    
                    if (!$entry) {
                        \Log::warning("Navigation item {$itemId} references non-existent entry: {$entryId}");
                        continue;
                    }
                    
                    $transformed[] = [
                        'id' => $itemId,
                        'title' => $entry->value('title'),
                        'url' => $entry->url(),
                        'entry_data' => [
                            'id' => $entry->id(),
                            'slug' => $entry->slug(),
                            'collection' => $entry->collectionHandle(),
                            'published' => $entry->published(),
                            'data' => $entry->data()->all(),
                        ],
                        'children' => [], // Handle children if needed later
                    ];
                    
                    \Log::info("Navigation item '{$entry->value('title')}' linked to entry: {$entry->id()}");
                    
                } catch (\Exception $e) {
                    \Log::error("Error transforming navigation item: " . $e->getMessage());
                    continue;
                }
            }
            
            return $transformed;
        } catch (\Exception $e) {
            \Log::error("Error transforming navigation tree: " . $e->getMessage());
            return [];
        }
    }
}
