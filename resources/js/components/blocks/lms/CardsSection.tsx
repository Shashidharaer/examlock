import { Card, CardDescription, CardHeader } from "@/components/ui/card";

interface CardsSectionProps {
    simple_card?: [{ card_title?: string; card_description?: string }];
}

export default function CardsSection({ simple_card }: CardsSectionProps) {
  return (
    <section className="my-10 md:my-20 px-4 w-full">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mx-auto max-w-7xl">
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
