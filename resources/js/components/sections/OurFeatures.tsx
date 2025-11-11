import Featuredcard from "@/components/ui/FeaturedCard";
import SectionTitle from "../common/SectionTitle";
import HomepageCard from "../ui/HomepageCard";

interface OurFeaturesProps {
  badge_icon_text?: string;
  title?: string;
  description?: string;
  home_page_card?: {
    badge_text?: string;
    title?: string;
    description?: string;
    image_src?: string;
    card_image?: string[];
  }[];
}

export default function PowerfulFeaturesSection({ badge_icon_text, title, description, home_page_card }: OurFeaturesProps) {
  return (
    <section className="container mx-auto px-4 my-10 md:my-20">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badgeIcon
          badgeTitle={badge_icon_text}
          title={title}
          description={description}
        />

        <div className="mt-10 md:mt-16 space-y-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Restricts screen capturing */}
            <Featuredcard
              badgeTitle="Ongoing security"
              title="Restricting Screen Capturing"
              description="Detects and stops screen sharing and mirroring across devices to secure your test content ."
              featuredImage="storage/images/screencapture.webp"
              icon="storage/images/screen-icon.svg"
            />

            {/* Restricts printing capability */}
            <Featuredcard
              badgeTitle="System Restrictions"
              title="Restricting Printing Capability"
              description="Disables system commands, keyboard shortcuts, and print options to prevent unauthorized actions."
              featuredImage="storage/images/printing-restriction.webp"
              icon="storage/images/focus-icon.svg"
              className="transform translate-x-3.5 lg:translate-y-12 lg:scale-110"
            />
          </div>
          <HomepageCard
            badgeTitle={home_page_card ? home_page_card[0].badge_text : ''}
            title={home_page_card ? home_page_card[0].title : ''}
            description={home_page_card ? home_page_card[0].description : ''}
            primaryLabel="Book a Demo"
            secondaryLabel="Contact Us"
            imageSrc={home_page_card && home_page_card[0].card_image && home_page_card[0].card_image.length > 0 ? `/storage/${home_page_card[0].card_image[0]}` : ''}
          />
        </div>
      </div>

    </section>
  );
}
