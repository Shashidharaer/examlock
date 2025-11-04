import Featuredcard from "@/components/layout/FeaturedCard";
import SectionTitle from "../common/SectionTitle";

interface OurFeaturesProps {
  badge_icon_text?: string;
  title?: string;
  description?: string;
}

export default function PowerfulFeaturesSection({ badge_icon_text, title, description }: OurFeaturesProps) {
  return (
    <section className="container mx-auto px-4 xl:px-0 my-10 md:my-20">
      <SectionTitle
        badgeIcon
        badgeTitle={badge_icon_text}
        title={title}
        description={description}
      />

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
    </section>
  );
}
