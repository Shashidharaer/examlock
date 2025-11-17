import { useTableOfContents } from '@/hooks/useTableOfContents';
import { cn } from '@/lib/utils';

interface TableOfContentsProps {
  /** A CSS selector for the container of the article content. */
  contentSelector: string;
}

export default function TableOfContents({ contentSelector }: TableOfContentsProps) {
  const { activeId, tocItems } = useTableOfContents(contentSelector);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (tocItems.length === 0) {
    return null; // Don't render anything if there are no headings
  }

  return (
    <aside className="hidden xl:block xl:w-64 xl:shrink-0 xl:border-l xl:border-gray-200 xl:pl-6 sticky top-24">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">
          On this page
        </h3>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(e) => handleScrollTo(e, item.id)}
                className={cn(
                  'block text-sm text-gray-600 hover:text-primary transition-all py-1',
                  {
                    'text-primary font-medium': activeId === item.id,
                    'pl-4': item.level === 3, // Indent h3 links
                  }
                )}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
    </aside>
  );
}