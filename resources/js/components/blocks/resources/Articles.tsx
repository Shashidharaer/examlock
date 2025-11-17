
import { useState } from "react";
import DocsSidebar from "./DocsSidebar";
import DocsArticle from "./ArticleContent";
import TableOfContents from "./TableOfContents";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { usePage } from "@inertiajs/react";

interface DocsNavItem {
  title: string;
  href: string;
  slug?: string;
}

interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}

interface ArticlesPageProps {
  id?: string;
  title?: string;
  content?: string;
  type?: string;
  enabled?: boolean;
  sidebar_sections?: DocsNavSection[];
  collectionStructure?: DocsNavSection[];
}

export default function Docs({ 
  title = "Documentation",
  content = "",
  sidebar_sections,
  collectionStructure
}: ArticlesPageProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  // Get collection structure from page props (Inertia)
  const { props } = usePage();
  const pageCollectionStructure = (props as any).collectionStructure;
  
  // Use collection structure from page props, or fall back to component props
  const sidebarData = pageCollectionStructure || collectionStructure || sidebar_sections;

  // Build dynamic breadcrumb based on current path
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const pathSegments = pathname.split('/').filter(Boolean);
  
  // Map collection names to their correct slugs/labels
  const collectionMapping: Record<string, { label: string; href: string }> = {
    'resources': { label: 'Resources', href: '/resources' },
  };
  
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    ...pathSegments.slice(0, -1).map((segment, index) => {
      // Check if this segment has a mapping
      const mapped = collectionMapping[segment];
      if (mapped) {
        return { label: mapped.label, href: mapped.href };
      }
      
      // Otherwise, build from segment
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      return { label, href };
    }),
    { label: title, href: "#" }, // Current page
  ];

  return (
    <div className="min-h-screen w-full">
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumb and Mobile Menu Button */}
          <div className="mb-6 flex items-center justify-between gap-4">
            <div className="flex-1 min-w-0">
              <Breadcrumb items={breadcrumbItems} />
            </div>
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden flex-shrink-0"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              aria-label="Toggle sidebar"
            >
              <Icon icon="mdi:menu" className="h-5 w-5" />
            </Button>
          </div>

          {/* Overlay for mobile sidebar */}
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}

          {/* Three Column Layout */}
          <div className="flex flex-col lg:flex-row gap-8 relative">
            {/* Left Sidebar - Navigation */}
            <div
              className={cn(
                "lg:block",
                isSidebarOpen
                  ? "block fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 p-6 overflow-y-auto shadow-xl lg:static lg:inset-auto lg:z-auto lg:shadow-none"
                  : "hidden"
              )}
            >
              {/* Close button for mobile */}
              {isSidebarOpen && (
                <div className="flex justify-between items-center mb-6 lg:hidden">
                  <h2 className="text-lg font-semibold">Navigation</h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsSidebarOpen(false)}
                    aria-label="Close sidebar"
                  >
                    <Icon icon="mdi:close" className="h-5 w-5" />
                  </Button>
                </div>
              )}
              <DocsSidebar sections={sidebarData} />
            </div>

            {/* Main Content - Article */}
            <div className="flex-1 min-w-0">
              <div id="docs-article-content" className=" rounded-lg p-6 md:p-8 lg:p-10">
                <DocsArticle title={title} content={content} />
              </div>
              
              {/* Table of Contents for Mobile/Tablet */}
              <div className="xl:hidden mt-8 border-t border-gray-200 pt-8">
                <TableOfContents contentSelector="#docs-article-content" />
              </div>
            </div>

            {/* Right Sidebar - Table of Contents (Desktop) */}
            <div className="hidden xl:block">
              <TableOfContents contentSelector="#docs-article-content" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
