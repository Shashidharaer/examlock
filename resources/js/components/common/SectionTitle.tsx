import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

interface SectionTitleProps {
  children?: React.ReactNode;
  className?: string;
  desClassName?: string;
  badgeTitle?: string;
  title?: string;
  description?: string;
  badgeIcon?: boolean | React.ReactNode;
}

export default function SectionTitle({
  children,
  className,
  badgeTitle,
  title,
  description,
  badgeIcon,
  desClassName,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        { "flex flex-col text-center items-center md:mb-6 mt-4": !className },
        className
      )}
    >
      {badgeIcon && (
        <div className="flex items-center gap-2 mb-3 md:mb-6 border p-1 bg-white rounded-4xl w-fit inset-shadow-md shadow-sm/8">
          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center bg-shine text-white">
            {badgeIcon === true ? (
              <Icon
                icon="bi:stars"
                className="w-4 md:w-5 h-4 md:h-5 rotate-90"
              />
            ) : (
              badgeIcon
            )}
          </div>
          <span className="text-xs md:text-sm text-gray-600 pr-4">
            {badgeTitle}
          </span>
        </div>
      )}
      <h2 className="text-2xl md:text-5xl max-w-2xl font-medium text-prime mb-3 md:mb-6 leading-tight">
        {title}
        {children}
      </h2>
      {description && <p
        className={cn(
          {
            "text-sm md:text-xl text-gray-600 max-w-2xl font-light mx-auto":
              !desClassName,
          },
          desClassName
        )}
      >
        {description}
      </p>}
    </div>
  );
}
