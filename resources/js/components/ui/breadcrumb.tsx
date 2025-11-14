import { Link } from "@inertiajs/react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center flex-wrap gap-1 text-xs sm:text-sm", className)}
    >
      <ol className="flex items-center flex-wrap gap-1">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <Icon
                icon="mdi:chevron-right"
                className="mx-1 sm:mx-2 h-3 w-3 sm:h-4 sm:w-4 text-gray-400 flex-shrink-0"
              />
            )}
            {item.href ? (
              <Link
                href={item.href}
                className="text-gray-600 hover:text-primary transition-colors truncate max-w-[120px] sm:max-w-none"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium truncate max-w-[120px] sm:max-w-none">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export { Breadcrumb, type BreadcrumbItem };

