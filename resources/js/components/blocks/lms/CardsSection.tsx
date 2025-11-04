import { Card, CardDescription, CardHeader } from "@/components/ui/card";

interface CardsSectionProps {
    simple_card?: [{ card_title?: string; card_description?: string }];
}

export default function CardsSection({ simple_card }: CardsSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {simple_card?.map((card, index) => (
              <Card key={index}>
                <CardHeader>
                  {card.card_title}
                  <CardDescription>
                    {card.card_description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
        </div>
      </section>
  )
}
