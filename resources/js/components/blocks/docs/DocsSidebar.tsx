import { Link } from "@inertiajs/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

interface DocsNavItem {
  title: string;
  href: string;
}

interface DocsNavSection {
  title: string;
  items: DocsNavItem[];
}

const docsSections: DocsNavSection[] = [
  {
    title: "Credentia Platform - Candidate",
    items: [
      { title: "Candidate Handbook", href: "/docs/getting-started/introduction" },
      { title: "FAQs", href: "/docs/getting-started/quick-start" },
    ],
  },
  {
    title: "Getting Started",
    items: [
      { title: "Installation", href: "/docs/getting-started/installation" },
    ],
  },
  {
    title: "Update Profile",
    items: [
      { title: "Profile Overview", href: "/docs/user-profile/overview" },
      { title: "Update Profile", href: "/docs/user-profile/update" },
      { title: "Change Password", href: "/docs/user-profile/change-password" },
      { title: "Reset Password", href: "/docs/user-profile/reset-password" },
    ],
  },
  {
    title: "Testing Application Form",
    items: [
        { title: "Overview", href: "/docs/examlock/overview" },
    ]
  },
  {
    title: "Exam Options",
    items: [
      { title: "Taking an Exam", href: "/docs/exams/taking-exam" },
      { title: "View Results", href: "/docs/exams/view-results" },
      { title: "Exam Settings", href: "/docs/exams/settings" },
    ],
  },
  {
    title: "Renew Registration & Reciprocity",
    items: [
      { title: "How can I renew my registration certificate?", href: "/docs/help/registration-certificate" },
      { title: "How to Apply for Reciprocity?", href: "/docs/help/contact-support" },
    ],
  },
  {
    title: "Payment Options",
    items: [
      { title: "Report Overview", href: "/docs/reports/overview" },
    ],
  },
  {
    title: "System/Internet Requirements",
    items: [
      { title: "Account Settings", href: "/docs/settings/account" },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const [openSections, setOpenSections] = useState<string[]>(() => {
    // Automatically open the section containing the active link
    const activeSection = docsSections.find(section =>
      section.items.some(item => pathname === item.href || pathname?.startsWith(item.href))
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

  return (
    <aside className="w-full lg:w-64 shrink-0 lg:pr-6 sticky md:top-24">
      <nav className="lg:sticky lg:top-24 space-y-1">
        {docsSections.map((section) => {
          const isOpen = openSections.includes(section.title);
          const isSectionActive = section.items.some(item => pathname === item.href || pathname?.startsWith(item.href));

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
                  {section.items.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <li key={item.href}>
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

