import { Badge } from "@/components/ui/badge";

interface NotificationBannerProps {
  tag?: string;
  notification_text?: string;
}

export default function NotificationBanner({ tag, notification_text }: NotificationBannerProps) {
  return (
    <div className="mx-auto px-4 pt-12 md:px-6 md:pt-16">
      <div className="flex items-center justify-center">
        <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-x-3 gap-y-2 bg-white rounded-full pr-4 pl-1 p-1 border border-[#ECECEC] shadow-sm/8 inset-shadow-md">
          <Badge
            variant="secondary"
            className="text-white px-3 py-2 font-light bg-shine"
          >
            {tag}
          </Badge>
          <img src="storage/images/sparkles.svg" alt="sparkles" className="hidden sm:block" />
          <span className="font-light text-center sm:text-left">{notification_text}</span>
        </div>
      </div>
    </div>
  );
}
