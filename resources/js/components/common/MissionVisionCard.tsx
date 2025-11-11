import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";

interface MissionVisionCardProps {
  badge_icon_text?: string;
  show_badge?: boolean;
  title?: string;
  description?: string;
  cards?: { card_title?: string, card_description?: string }[];
  examlock_image?: string;
}

export default function MissionVisionCard({ title, description, badge_icon_text, show_badge, cards, examlock_image }: MissionVisionCardProps) {
  return (
    <section className="w-full my-10 md:my-10 px-4">
      <div className="mx-auto max-w-7xl bg-[#fafafa] rounded-lg flex flex-col items-center pt-8 md:pb-16 gap-6 sm:gap-8 w-full px-4 sm:px-6 md:px-10 lg:px-20 shadow-sm">
        <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-full w-max p-1 pr-3 shadow-sm/4 inset-shadow-md">
          <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
            <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
          </div>
          <span className="text-sm text-gray-600">{badge_icon_text}</span>
        </div>
        <h4 className="text-2xl sm:text-3xl font-medium text-prime text-center">
          {title}
        </h4>
        <p className="font-light text-center text-sm sm:md:text-md md:text-xl max-w-4xl">
          {description}
        </p>

        <div className="w-full my-6 md:my-8 grid grid-cols-1 md:grid-cols-3 items-stretch gap-6 md:gap-8">
          <Card className="text-center w-full h-full">
            <CardHeader className="space-y-3">
              {cards && cards[0]?.card_title}
              <CardDescription className="text-sm md:text-base font-light">
                {cards && cards[0]?.card_description}
              </CardDescription>
            </CardHeader>
          </Card>

          <div className="flex items-center justify-center">
            <img
              src={`/storage/${examlock_image ?? 'layouts/exam-lock.svg'}`}
              alt="examlock"
              className="mx-auto w-60 sm:w-full h-auto"
            />
          </div>

          <Card className="text-center w-full h-full">
            <CardHeader className="space-y-3">
              {cards && cards[1]?.card_title}
              <CardDescription className="text-sm md:text-base font-light">
                {cards && cards[1]?.card_description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
