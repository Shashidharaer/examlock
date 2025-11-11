import { Card, CardDescription, CardHeader } from "@/components/ui/card"

interface OfficeSectionProps {
  title?: string;
  cards?: { card_title?: string, card_description?: string }[];
}

export default function OfficeSection({ title, cards }: OfficeSectionProps) {
  return (
    <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-4 text-prime font-medium leading-tight">
        {title}
      </h2>
      <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto">
        <Card className="w-full text-left gap-2">
          <CardHeader className="text-lg sm:text-xl md:text-2xl font-medium text-prime">
            {cards && cards[0]?.card_title}
          </CardHeader>
          <CardDescription className="mx-6 text-sm sm:text-base leading-relaxed font-light">
            {cards && cards[0]?.card_description}
          </CardDescription>
        </Card>
        <Card className="w-full text-left gap-2">
          <CardHeader className="text-lg sm:text-xl md:text-2xl font-medium text-prime">
            {cards && cards[1]?.card_title}
          </CardHeader>
          <CardDescription className="mx-6 text-sm sm:text-base leading-relaxed font-light">
            {cards && cards[1]?.card_description}
          </CardDescription>
        </Card>
      </div>
    </section>
  )
}
