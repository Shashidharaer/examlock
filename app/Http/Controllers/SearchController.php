<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\Entry;
use Statamic\Facades\Search;

class SearchController extends Controller
{
    /**
     * Handle search requests
     */
    public function search(Request $request)
    {
        $request->validate([
            'query' => 'required|string|min:2|max:255',
        ]);

        $query = $request->input('query');
        
        // Log the search query for debugging
        \Log::info('Search query: ' . $query);
        
        // Use the default search index configured in config/statamic/search.php
        $results = Search::index('default')
            ->search($query)
            ->get();
        
        \Log::info('Raw search results count: ' . $results->count());

        // Transform results to a more frontend-friendly format
        $formattedResults = $results->map(function ($result) {
            try {
                // Get the underlying searchable item
                $item = $result->getSearchable();
                
                // Skip if item doesn't exist or is null
                if (!$item) {
                    return null;
                }
                
                // Only handle Entries (skip Assets and other types)
                if (!($item instanceof \Statamic\Entries\Entry)) {
                    return null;
                }
                
                // Initialize variables
                $title = $item->get('title') ?? $item->get('heading') ?? 'Untitled';
                $url = $item->url() ?? $item->uri();
                
                // If URL is still null, try to generate it from collection and slug
                if (!$url) {
                    $collection = $item->collection();
                    $slug = $item->slug();
                    if ($collection && $slug) {
                        // Generate URL like /products/{slug}
                        $url = '/' . $collection->handle() . '/' . $slug;
                    }
                }
                
                $excerpt = $this->generateExcerpt($item);
                $type = 'Page';
                
                // Get collection title
                if ($item->collection()) {
                    $type = $item->collection()->title() ?? ucfirst($item->collection()->handle());
                }
                
                // Skip if no valid URL after all attempts
                if (!$url) {
                    \Log::warning('Skipping search result - no URL for: ' . $title);
                    return null;
                }
                
                return [
                    'id' => $item->id(),
                    'title' => $title,
                    'url' => $url,
                    'excerpt' => $excerpt,
                    'type' => $type,
                ];
            } catch (\Exception $e) {
                // Log the error and skip this result
                \Log::error('Search result error: ' . $e->getMessage());
                return null;
            }
        })->filter()->values(); // Remove null values and re-index

        return response()->json([
            'success' => true,
            'query' => $query,
            'results' => $formattedResults,
            'count' => $formattedResults->count(),
        ]);
    }

    /**
     * Generate an excerpt from the entry
     */
    private function generateExcerpt($item, $length = 150)
    {
        // Try different fields for excerpt
        $content = $item->get('excerpt') 
                ?? $item->get('description') 
                ?? $item->get('meta_description')
                ?? $item->get('content')
                ?? '';
        
        // If content is an array (like in some Bard fields), convert to string
        if (is_array($content)) {
            $content = $this->extractTextFromArray($content);
        }
        
        // Strip HTML tags if present
        $content = strip_tags($content);
        
        // Clean up whitespace
        $content = trim(preg_replace('/\s+/', ' ', $content));
        
        // Truncate to specified length
        if (strlen($content) > $length) {
            $content = substr($content, 0, $length);
            $lastSpace = strrpos($content, ' ');
            if ($lastSpace !== false) {
                $content = substr($content, 0, $lastSpace);
            }
            $content .= '...';
        }
        
        return $content ?: 'No description available.';
    }
    
    /**
     * Extract text from nested array (like Bard content)
     */
    private function extractTextFromArray($array, $maxLength = 300)
    {
        $text = '';
        
        if (!is_array($array)) {
            return (string) $array;
        }
        
        foreach ($array as $item) {
            if (is_array($item)) {
                if (isset($item['text'])) {
                    $text .= $item['text'] . ' ';
                } else {
                    $text .= $this->extractTextFromArray($item, $maxLength) . ' ';
                }
            } else {
                $text .= $item . ' ';
            }
            
            if (strlen($text) > $maxLength) {
                break;
            }
        }
        
        return trim($text);
    }
}
