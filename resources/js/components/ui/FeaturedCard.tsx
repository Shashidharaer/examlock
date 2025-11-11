import { cn } from "@/lib/utils";

interface FeaturedCardProps {
  icon?: string;
  badgeTitle: string;
  title: string;
  description: string;
  featuredImage: string;
  className?: string;
}

export default function FeaturedCard({
  icon,
  badgeTitle,
  title,
  description,
  featuredImage,
  className,
}: FeaturedCardProps) {
  return (
    <div className="bg-background rounded-2xl p-6 shadow-sm border flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-4 rounded-full bg-white p-1 w-fit pr-8 border border-gray-200 shadow-sm inset-shadow-md">
        <div className="w-6 md:w-8 h-6 md:h-8 text-white rounded-full flex items-center justify-center bg-shine">
          <img src={icon ? icon : "A"} alt="" />
        </div>
        <span className="text-xs md:text-base text-shadow-stone-600 font-[400]">
          {badgeTitle}
        </span>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-[600] text-gray-900 mb-4">
          {title}
        </h3>
        <p className="text-sm md:text-base font-light mb-6">{description}</p>
      </div>
      <div className="rounded-lg p-4">
        <img
          src={featuredImage}
          alt="Browser restrictions interface"
          className={cn(
            "w-full h-auto object-cover rounded drop-shadow-xl/4",
            className
          )}
        />
      </div>
    </div>
  );
}
