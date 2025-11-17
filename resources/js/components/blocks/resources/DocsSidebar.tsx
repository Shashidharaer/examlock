import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface DocsNavItem {
  title: string;
  href: string;
  slug?: string;
}

interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}

interface DocsSidebarProps {
  sections?: DocsNavSection[];
}

export default function DocsSidebar({ sections = [] }: DocsSidebarProps) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const [openSections, setOpenSections] = useState<string[]>(() => {
    // Automatically open the section containing the active link
    const activeSection = sections.find((section: DocsNavSection) =>
      section.items.some((item: DocsNavItem) => pathname === item.href || pathname?.startsWith(item.href))
    );
    return activeSection ? [activeSection.title] : [];
  });

  const toggleSection = (title: string) => {
    setOpenSections(prevOpenSections =>
      prevOpenSections.includes(title)
        ? prevOpenSections.filter(t => t !== title)
        : [...prevOpenSections, title]
    );
  };

  // If no sections provided, don't render anything
  if (!sections || sections.length === 0) {
    return null;
  }

  return (
    <aside className="w-full lg:w-64 shrink-0 lg:pr-6 sticky md:top-24">
      <nav className="lg:sticky lg:top-24 space-y-1">
        {sections.map((section: DocsNavSection) => {
          const isOpen = openSections.includes(section.title);
          const isSectionActive = section.items.some((item: DocsNavItem) => pathname === item.href || pathname?.startsWith(item.href));

          return (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className={cn(
                  "w-full flex items-center justify-between py-2 text-sm font-medium text-left",
                  "hover:text-primary focus:outline-none",
                  isSectionActive ? "text-primary" : "text-gray-900"
                )}
              >
                <span className="flex items-center">
                  {isOpen ? (
                    <ChevronDown className="h-4 w-4 mr-2 shrink-0" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2 shrink-0" />
                  )}
                  {section.title}
                </span>
              </button>
              {isOpen && (
                <ul className="pl-6 mt-2 space-y-1 border-l border-gray-200">
                  {section.items.map((item: DocsNavItem) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href || item.slug}>
                        <Link
                          href={item.href}
                          className={cn(
                            "block py-1.5 text-sm transition-colors relative",
                            isActive
                              ? "text-primary font-medium"
                              : "text-gray-700 hover:text-gray-900"
                          )}
                        >
                          {isActive && (
                            <span className="absolute -left-[1.55rem] top-0 h-full w-0.5 bg-primary" />
                          )}
                          {item.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

