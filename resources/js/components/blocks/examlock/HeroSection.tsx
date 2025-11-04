import Hero from "@/components/layout/PageHero"

interface HeroSectionProps {
    badge_text?: string;
    heading?: string;
    description?: string;
}

export default function HeroSection({ badge_text, heading, description }: HeroSectionProps) {
  return (
    <Hero
      badgeTitle={badge_text? badge_text : 'No Title'}
      title={heading? heading : 'No Heading'}
      description={description? description : 'No Description'}
    />
  )
}
