import SectionTitle from "@/components/common/SectionTitle";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";

interface AdvancedFeatureCard {
  id?: string;
  card_title?: string;
  card_description?: string;
  type?: string;
  enabled?: boolean;
}

interface AdvancedFeaturesProps {
  id?: string;
  badge_icon_text?: string;
  title?: string;
  show_badge?: boolean;
  type?: string;
  enabled?: boolean;
  cards?: AdvancedFeatureCard[];
}

export default function AdvancedFeatures({ 
  badge_icon_text, 
  title, 
  show_badge = true, 
  cards = [] 
}: AdvancedFeaturesProps) {
  // Filter only enabled cards
  const enabledCards = cards.filter(card => card.enabled);

  return (
     <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <SectionTitle
          title={title}
          badgeIcon={
            show_badge ? <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" /> : undefined
          }
          badgeTitle={badge_icon_text}
          className="flex flex-col text-center items-center mb-0 mt-4"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-2 md:mt-8">
          {enabledCards.map((feature) => {
            return (
              <Card key={feature.id} className="max-w-lg mx-auto shadow-sm w-full">
                <CardHeader className="flex flex-col gap-3">
                  {feature.card_title}
                  <CardDescription>{feature.card_description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>
  )
}
