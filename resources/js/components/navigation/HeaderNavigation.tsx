import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { Link, usePage, router } from "@inertiajs/react";
import { useState, useEffect, useRef } from 'react';
import Navigation from '../ui/nav';
import { useNavigationByHandle } from '@/components/NavigationProvider';
import axios from 'axios';

// Type for search results
interface SearchResult {
  id: string;
  title: string;
  url: string;
  excerpt: string;
  type: string;
}

interface InPageMatch {
  text: string;
  context: string;
  index: number;
}

export default function Header() {
  // Read branding (logo) from Inertia page props
  const { branding } = usePage().props as {
    branding?: { logo?: { url?: string; alt?: string } };
  };

  const headerNav = useNavigationByHandle('header');
  const logoUrl = branding?.logo?.url;
  const logoAlt = branding?.logo?.alt;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileProductMenuOpen, setIsMobileProductMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [inPageMatches, setInPageMatches] = useState<InPageMatch[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  // Helper to render context with highlighted search term
  const renderContext = (context: string) => {
    // Split by the markers **text**
    const parts = context.split(/\*\*(.*?)\*\*/g);
    
    return (
      <>
        {parts.map((part, index) => {
          if (index % 2 === 1) {
            return (
              <span key={index} className="bg-yellow-200 font-semibold text-gray-900 px-1 rounded">
                {part}
              </span>
            );
          }
          return <span key={index}>{part}</span>;
        })}
      </>
    );
  };

  // Search in current page content
  const searchInPage = (query: string): InPageMatch[] => {
    if (query.length < 2) return [];
    
    const matches: InPageMatch[] = [];
    const bodyText = document.body.innerText;
    const searchRegex = new RegExp(query, 'gi');
    let match;
    let matchCount = 0;
    const maxMatches = 5; // Limit to first 5 matches
    
    while ((match = searchRegex.exec(bodyText)) !== null && matchCount < maxMatches) {
      const start = Math.max(0, match.index - 30);
      const end = Math.min(bodyText.length, match.index + query.length + 30);
      let context = bodyText.substring(start, end);
      
      // Clean up context
      context = context.replace(/\s+/g, ' ').trim();
      
      // Build context with highlighted search term
      const matchStart = match.index - start;
      const before = context.substring(0, matchStart);
      const matched = context.substring(matchStart, matchStart + query.length);
      const after = context.substring(matchStart + query.length);
      
      // Create formatted context with ellipsis
      let formattedContext = '';
      if (start > 0) formattedContext += '...';
      formattedContext += before;
      formattedContext += `**${matched}**`; // Mark the search term
      formattedContext += after;
      if (end < bodyText.length) formattedContext += '...';
      
      matches.push({
        text: match[0],
        context: formattedContext,
        index: match.index
      });
      
      matchCount++;
    }
    
    return matches;
  };

  // Handle search
  const performSearch = async (query: string) => {
    if (query.length < 2) {
      setSearchResults([]);
      setInPageMatches([]);
      setShowResults(false);
      return;
    }

    setIsSearching(true);
    
    // Search in current page
    const pageMatches = searchInPage(query);
    setInPageMatches(pageMatches);
    
    try {
      const response = await axios.post('/api/search', { query });
      
      if (response.data.success && Array.isArray(response.data.results)) {
        setSearchResults(response.data.results);
        setShowResults(true);
      } else {
        setSearchResults([]);
        setShowResults(false);
      }
    } catch {
      setSearchResults([]);
      setShowResults(false);
    } finally {
      setIsSearching(false);
    }
  };

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      
      // Don't close if clicking inside search results
      if (searchRef.current && searchRef.current.contains(target)) {
        return;
      }
      if (mobileSearchRef.current && mobileSearchRef.current.contains(target)) {
        return;
      }
      
      // Close if clicking outside
      setShowResults(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    // Clear any existing highlights when search query changes
    document.querySelectorAll('.search-highlight').forEach(el => {
      const parent = el.parentNode;
      if (parent) {
        parent.replaceChild(document.createTextNode(el.textContent || ''), el);
        parent.normalize();
      }
    });
  };

  const handleResultClick = (url: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (!url) return;
    
    // Close UI
    const closeUI = () => {
      setIsSearchOpen(false);
      setSearchQuery('');
      setShowResults(false);
      setIsMobileMenuOpen(false);
    };
    
    router.visit(url, {
      onError: closeUI,
      onSuccess: closeUI
    });
  };

  const handleInPageMatchClick = (matchIndex: number) => {
    // Close search UI
    setIsSearchOpen(false);
    setShowResults(false);
    setIsMobileMenuOpen(false);
    
    // Wait for UI to close, then highlight
    setTimeout(() => {
      // Remove existing highlights
      document.querySelectorAll('mark.search-highlight').forEach(mark => {
        const parent = mark.parentNode;
        if (parent) {
          parent.replaceChild(document.createTextNode(mark.textContent || ''), mark);
          parent.normalize();
        }
      });

      // Find all text matches in the page
      const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
          acceptNode: (node) => {
            const parent = node.parentElement;
            if (!parent) return NodeFilter.FILTER_REJECT;
            
            const tagName = parent.tagName.toLowerCase();
            if (['script', 'style', 'noscript'].includes(tagName)) {
              return NodeFilter.FILTER_REJECT;
            }
            
            // Skip search dropdowns
            if (parent.closest('#mobile-menu') || parent.closest('.absolute.left-0.top-full')) {
              return NodeFilter.FILTER_REJECT;
            }
            
            return NodeFilter.FILTER_ACCEPT;
          }
        }
      );

      const matches: Array<{ node: Text; start: number; end: number }> = [];
      const regex = new RegExp(searchQuery, 'gi');
      
      let currentNode: Node | null;
      while ((currentNode = walker.nextNode())) {
        const textNode = currentNode as Text;
        const text = textNode.textContent || '';
        
        let match;
        regex.lastIndex = 0;
        while ((match = regex.exec(text)) !== null) {
          matches.push({
            node: textNode,
            start: match.index,
            end: match.index + searchQuery.length
          });
        }
      }

      // Highlight the specific match
      const matchData = matches[matchIndex];
      if (!matchData) return;

      const { node, start, end } = matchData;
      const text = node.textContent || '';
      
      // Create highlighted mark element
      const mark = document.createElement('mark');
      mark.className = 'search-highlight';
      mark.style.cssText = 'background-color: #ffd700; color: #000; padding: 2px 4px; border-radius: 3px; font-weight: 500; box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.3);';
      mark.textContent = text.substring(start, end);
      
      // Replace text node with fragment
      const fragment = document.createDocumentFragment();
      if (start > 0) fragment.appendChild(document.createTextNode(text.substring(0, start)));
      fragment.appendChild(mark);
      if (end < text.length) fragment.appendChild(document.createTextNode(text.substring(end)));
      
      node.parentNode?.replaceChild(fragment, node);
      
      // Scroll to highlighted text
      setTimeout(() => {
        const rect = mark.getBoundingClientRect();
        const absoluteTop = window.scrollY + rect.top;
        const middle = absoluteTop - (window.innerHeight / 2) + (rect.height / 2);
        
        window.scrollTo({ top: middle, behavior: 'smooth' });
      }, 100);
    }, 200);
  };

  const handleMenuClick = () => {
    setIsMobileProductMenuOpen(!isMobileProductMenuOpen);
  };

  const handleProductMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-3 z-50 px-4">
      <div className="relative mx-auto max-w-7xl rounded-lg border border-gray-200 bg-white px-4 shadow-lg shadow-neutral-500/10 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex h-full flex-shrink-0 items-center gap-2"
          >
            <img
              src={logoUrl}
              alt={logoAlt}
              className="h-8 w-auto"
            />
          </Link>

          {/* Navigation OR Search (lg+) */}
          {isSearchOpen ? (
            <div className="mx-4 hidden flex-1 lg:flex" ref={searchRef}>
              <div className="relative w-full">
                <div className="text-primary bg-accent/50 flex w-full items-center gap-2 rounded-md px-3 py-2 border border-gray-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6"
                    />
                    <path
                      fill="currentColor"
                      d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"
                    />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search..."
                    className="w-full text-sm outline-none bg-transparent placeholder:text-gray-500"
                    autoFocus
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setIsSearchOpen(false);
                        setSearchQuery('');
                        setShowResults(false);
                      }
                    }}
                  />
                  {isSearching && (
                    <Icon icon="eos-icons:loading" className="size-4 animate-spin" />
                  )}
                </div>
                
                {/* Search Results Dropdown */}
                {showResults && searchQuery.length >= 2 && (
                  <div className="absolute left-0 top-full mt-2 w-full bg-white border-2 border-gray-300 rounded-lg shadow-2xl max-h-96 overflow-y-auto z-[100]">
                    {/* Route/Page Results - Show First */}
                    {searchResults.length > 0 && (
                      <div className="border-b border-gray-200">
                        <div className="px-4 py-2 bg-gray-50 text-xs font-semibold text-gray-700 uppercase tracking-wide">
                          Pages ({searchResults.length})
                        </div>
                        <ul className="py-1">
                          {searchResults.map((result, index) => (
                            <li
                              key={result.id || index}
                              className="px-4 py-3 hover:bg-accent/80 cursor-pointer border-b last:border-b-0 transition-all duration-150"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleResultClick(result.url, e);
                              }}
                              role="button"
                              tabIndex={0}
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  handleResultClick(result.url);
                                }
                              }}
                            >
                              <div className="flex items-center gap-2">
                                <Icon icon="mdi:file-document" className="text-primary size-4 flex-shrink-0" />
                                <div className="flex-1">
                                  <div className="font-semibold text-gray-900 text-base">
                                    {result.title || 'Untitled'}
                                  </div>
                                  <div className="text-xs text-primary font-medium mt-0.5 uppercase tracking-wide">
                                    {result.type || 'Page'}
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* In-Page Matches - Show Second */}
                    {inPageMatches.length > 0 && (
                      <div>
                        <div className="px-4 py-2 bg-blue-50 text-xs font-semibold text-blue-900 uppercase tracking-wide">
                          On This Page ({inPageMatches.length})
                        </div>
                        <ul className="py-1">
                          {inPageMatches.map((match, index) => (
                            <li
                              key={`page-${index}`}
                              className="px-4 py-2.5 hover:bg-blue-50 cursor-pointer border-b last:border-b-0 transition-all duration-150"
                              onMouseDown={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleInPageMatchClick(index);
                              }}
                              role="button"
                              tabIndex={0}
                            >
                              <div className="flex items-start gap-2">
                                <Icon icon="mdi:file-find" className="text-blue-600 size-4 flex-shrink-0 mt-0.5" />
                                <div className="text-sm text-gray-700 leading-relaxed">
                                  {renderContext(match.context)}
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* No Results */}
                    {inPageMatches.length === 0 && searchResults.length === 0 && (
                      <div className="px-4 py-8 text-center text-gray-500">
                        No results found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Navigation />
          )}

          {/* Right side */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            {/* Search - Hidden on small screens */}
            <button
              className="hidden p-1 text-gray-600 transition-colors hover:text-gray-900 lg:block"
              onClick={() => setIsSearchOpen((v) => !v)}
              aria-label={
                isSearchOpen ? 'Close search' : 'Open search'
              }
            >
              {isSearchOpen ? (
                <Icon icon="mdi:close" className="size-5" />
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M10.77 18.3a7.53 7.53 0 1 1 7.53-7.53a7.53 7.53 0 0 1-7.53 7.53m0-13.55a6 6 0 1 0 6 6a6 6 0 0 0-6-6"
                  />
                  <path
                    fill="currentColor"
                    d="M20 20.75a.74.74 0 0 1-.53-.22l-4.13-4.13a.75.75 0 0 1 1.06-1.06l4.13 4.13a.75.75 0 0 1 0 1.06a.74.74 0 0 1-.53.22"
                  />
                </svg>
              )}
            </button>
            <span className="hidden h-[1.5rem] w-[1px] bg-[#ebe7e0] lg:block"></span>
            {/* Login - Hidden on mobile */}
            <Link
              href="#"
              className="hidden text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 lg:block"
            >
              Login
            </Link>

            {/* Contact Button */}
            <Button
              asChild
              className="hidden transition-colors lg:flex"
            >
              <Link href="/contact">
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                  />
                </svg>
              </Link>
            </Button>

            {/* Mobile menu button */}
            <button
              className="p-2 text-gray-600 transition-all duration-500 hover:text-gray-900 lg:hidden"
              onClick={handleProductMenuClick}
              aria-label="Toggle Menu"
            >
              {!isMobileMenuOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 6H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M3 18H21"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M20 20L4 4m16 0L4 20"
                  />
                </svg>
              )}
            </button>
            <aside id="mobile-menu" className={cn('w-content fixed right-[1.2rem] top-[5rem] z-50 mb-2 rounded-lg border border-[#E5E7EB] bg-white p-2 shadow-lg lg:hidden',
                { hidden: !isMobileMenuOpen },
              )} style={{ height: '-webkit-fill-available' }}>
              <div className="flex flex-col text-[14px] text-gray-700">
                <div className="mb-2 flex flex-col gap-2 rounded-sm border p-2" ref={mobileSearchRef}>
                  <div className="flex items-center gap-2">
                    <input
                      type="search"
                      className="h-full w-full focus:outline-none"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    {isSearching ? (
                      <Icon icon="eos-icons:loading" className="size-4 animate-spin" />
                    ) : (
                      <Icon
                        icon="iconamoon:search"
                        className="ml-1 inline-block size-4"
                      />
                    )}
                  </div>
                  
                  {/* Mobile Search Results */}
                  {showResults && searchQuery.length >= 2 && (
                    <div className="max-h-64 overflow-y-auto border-t pt-2 bg-gray-50 rounded-b">
                      {/* Route/Page Results - Show First */}
                      {searchResults.length > 0 && (
                        <div className="mb-2">
                          <div className="px-3 py-1.5 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wide">
                            Pages ({searchResults.length})
                          </div>
                          <ul className="space-y-1 mt-1">
                            {searchResults.map((result, index) => (
                              <li
                                key={result.id || index}
                                className="px-3 py-2.5 hover:bg-white cursor-pointer rounded transition-colors"
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleResultClick(result.url, e);
                                }}
                                role="button"
                                tabIndex={0}
                              >
                                <div className="flex items-center gap-2">
                                  <Icon icon="mdi:file-document" className="text-primary size-3 flex-shrink-0" />
                                  <div className="flex-1">
                                    <div className="font-medium text-gray-900 text-sm">
                                      {result.title || 'Untitled'}
                                    </div>
                                    <div className="text-xs text-primary font-medium mt-0.5 uppercase tracking-wide">
                                      {result.type || 'Page'}
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* In-Page Matches - Show Second */}
                      {inPageMatches.length > 0 && (
                        <div>
                          <div className="px-3 py-1.5 bg-blue-50 text-xs font-semibold text-blue-900 uppercase tracking-wide">
                            On This Page ({inPageMatches.length})
                          </div>
                          <ul className="space-y-1 mt-1">
                            {inPageMatches.map((match, index) => (
                              <li
                                key={`mobile-page-${index}`}
                                className="px-3 py-2 hover:bg-white cursor-pointer rounded transition-colors"
                                onMouseDown={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  handleInPageMatchClick(index);
                                }}
                                role="button"
                                tabIndex={0}
                              >
                                <div className="flex items-start gap-2">
                                  <Icon icon="mdi:file-find" className="text-blue-600 size-3 flex-shrink-0 mt-0.5" />
                                  <div className="text-xs text-gray-700 leading-relaxed">
                                    {renderContext(match.context)}
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* No Results */}
                      {inPageMatches.length === 0 && searchResults.length === 0 && (
                        <div className="px-2 py-4 text-center text-gray-500 text-sm">
                          No results found
                        </div>
                      )}
                    </div>
                  )}
                </div>
                
                {/* Dynamic Navigation Items */}
                {headerNav?.tree?.map((item: any) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isExternal = item.url?.startsWith('http');

                  if (hasChildren) {
                    return (
                      <div key={item.id}>
                        <button
                          type="button"
                          className="border-b-1 hover:bg-accent flex w-full cursor-pointer items-center justify-between px-4 py-2 text-left"
                          onClick={() => item.title.toLowerCase() === 'products' && handleMenuClick()}
                        >
                          {item.title}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className={cn('transition-transform', isMobileProductMenuOpen ? 'rotate-180' : '')}
                          >
                            <path
                              fill="currentColor"
                              d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7t.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275t.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062"
                            />
                          </svg>
                        </button>
                        <ul
                          className={cn(
                            'flex flex-col overflow-hidden font-light text-neutral-500 transition-all duration-300 ease-in-out',
                            isMobileProductMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0',
                          )}
                        >
                          {item.children.map((child: any) => (
                            <li key={child.id} className="hover:bg-accent hover:text-primary cursor-pointer rounded-sm px-2 py-2 pl-8">
                              <Link
                                href={child.url || '#'}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    );
                  }

                  // Render simple link for items without children
                  return (
                    <Link
                      key={item.id}
                      href={item.url || '#'}
                      target={isExternal ? '_blank' : undefined}
                      className="border-b-1 hover:bg-accent flex cursor-pointer items-center justify-between px-4 py-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  );
                })}

                {/* Contact Button */}
                <div className="mt-4 flex w-full justify-between gap-2">
                  <Button variant="outline" className='flex-1'>Login</Button>
                  <Button
                    asChild
                    className="bg-primary flex items-center gap-2 px-3 py-2 text-sm font-medium text-white transition-colors sm:px-4"
                  >
                    <Link
                      href="/contact"
                      onClick={() =>
                        setIsMobileMenuOpen(false)
                      }
                    >
                      Contact
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M16.175 13H5q-.425 0-.712-.288T4 12t.288-.712T5 11h11.175l-4.9-4.9q-.3-.3-.288-.7t.313-.7q.3-.275.7-.288t.7.288l6.6 6.6q.15.15.213.325t.062.375t-.062.375t-.213.325l-6.6 6.6q-.275.275-.687.275T11.3 19.3q-.3-.3-.3-.712t.3-.713z"
                        />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </header>
  );
}
