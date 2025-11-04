import HomepageCard from "../layout/HomepageCard";

interface StatsSectionProps {
  badge_text?: string;
  title?: string;
  card_image?: string[];
}

export default function TransformBrowserSection({ badge_text, title, card_image }: StatsSectionProps) {
  return (
    <section className="container mx-auto px-4 xl:px-0 my-10 md:my-20">
      <HomepageCard
        badgeTitle={badge_text}
        title={title}
        primaryLabel="Book a Demo"
        secondaryLabel="Contact Us"
        imageSrc={card_image && card_image.length > 0 ? `/storage/${card_image[0]}` : ''}
        titleClassName="md:text-[3rem] text-2xl font-semibold text-gray-900 mb-4"
      >
        {/* children: features grid specific to the Transform Browser section */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <div className="text-xl md:text-[2rem] font-semibold text-gray-900 mb-2">
              50,000+
            </div>
            <div className="max-sm:text-sm text-gray-600">
              Community developers
            </div>
          </div>
          <div>
            <div className="text-xl md:text-[2rem] font-semibold text-gray-900 mb-2">
              Top 10
            </div>
            <div className="max-sm:text-sm text-gray-600">in Reliability</div>
          </div>
          <div>
            <div className="text-xl md:text-[2rem] font-semibold text-gray-900 mb-2">
              280,000+
            </div>
            <div className="max-sm:text-sm text-gray-600">
              Monthly downloads
            </div>
          </div>
          <div>
            <div className="text-xl md:text-[2rem] font-semibold text-gray-900 mb-2">
              165+
            </div>
            <div className="max-sm:text-sm text-gray-600">
              Countries around the world
            </div>
          </div>
        </div>
      </HomepageCard>
    </section>
  );
}
