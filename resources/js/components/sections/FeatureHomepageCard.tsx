import HomepageCard from '../ui/HomepageCard';

interface FeatureCardProps {
  badge_text?: string;
  title?: string;
  description?: string;
  card_image?: string[];
}

export default function FeatureHomepageCard({ badge_text, title, description, card_image }: FeatureCardProps) {
  const imageUrl = card_image && card_image.length > 0 ? `/storage/${card_image[0]}` : '';
  return (
    <section className="mt-8">
      <HomepageCard
        badgeTitle={badge_text}
        title={title}
        description={description}
        imageSrc={imageUrl}
        imageClassName="w-full h-auto z-10 relative"
      />
    </section>
  )
}
