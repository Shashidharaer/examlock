import { useState, useEffect } from 'react';

// Helper function to generate a URL-friendly slug from text
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w-]+/g, ''); // Remove all non-word chars

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function useTableOfContents(contentContainerSelector: string) {
  const [activeId, setActiveId] = useState<string>('');
  const [tocItems, setTocItems] = useState<TocItem[]>([]);

  useEffect(() => {
    const contentElement = document.querySelector(contentContainerSelector);
    if (!contentElement) return;

    // Find all heading elements (h2, h3) within the article content
    const headingElements = Array.from(
      contentElement.querySelectorAll('h2, h3')
    ) as HTMLElement[];

    const items = headingElements.map((el) => {
      const text = el.innerText;
      const id = slugify(text);
      const level = Number(el.nodeName.charAt(1)); // h2 -> 2, h3 -> 3
      el.id = id; // Set the id on the heading element itself for linking
      return { id, text, level };
    });

    setTocItems(items);

    // Track which headings are currently visible
    const visibleHeadings = new Set<string>();

    // IntersectionObserver to track which section is currently active
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleHeadings.add(entry.target.id);
          } else {
            visibleHeadings.delete(entry.target.id);
          }
        });

        // Find the first visible heading in the document order
        const firstVisibleId = headingElements.find((el) =>
          visibleHeadings.has(el.id)
        )?.id;

        if (firstVisibleId) {
          setActiveId(firstVisibleId);
        }
      },
      { 
        rootMargin: '-100px 0px -80% 0px' // Account for header, trigger when in upper 20% of viewport
      }
    );

    headingElements.forEach((el) => observer.observe(el));

    // Cleanup observer on component unmount
    return () => {
      headingElements.forEach((el) => observer.unobserve(el));
    };
  }, [contentContainerSelector]);

  return { activeId, tocItems };
}