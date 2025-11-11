import { Badge } from "@/components/ui/badge";

interface NotificationBannerProps {
  tag?: string;
  notification_text?: string;
}


export default function NotificationBanner({ tag, notification_text }: NotificationBannerProps) {
  return (
    <div className="container mx-auto px-6 py-8 md:py-12">
      <div className="flex items-center justify-center py-3">
        <div className="flex items-center gap-3 bg-white rounded-full pr-4 pl-1 p-1 border border-[#ECECEC] shadow-sm/8 inset-shadow-md">
          <Badge
            variant="secondary"
            className="text-white px-3 py-2 font-light bg-shine"
          >
            {tag}
          </Badge>
          <img src="storage/images/sparkles.svg" alt="sparkles" />
          <span className="font-light">{notification_text}</span>
        </div>
      </div>
    </div>
  );
}
