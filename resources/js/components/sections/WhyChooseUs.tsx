import SectionTitle from "../common/SectionTitle";
import WhatMakeCard from "../layout/WhatMakeCard";

interface WhyChooseUsProps {
  badge_icon_text? : string;
  title? : string;
  description? : string;
}

export default function WhyChooseUs({ badge_icon_text, title, description }: WhyChooseUsProps) {
  return (
    <section className="container mx-auto px-4 xl:px-0 my-10 md:my-20">
      <SectionTitle
        desClassName="md:max-w-7xl mx-auto text-sm md:text-xl text-gray-600 font-light"
        badgeIcon
        badgeTitle={badge_icon_text}
        title={title}
        description={description}
      />

      <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Activity tracking & insights */}
        <WhatMakeCard
          icon="storage/layouts/activity.svg"
          title="Activity tracking & insights"
          description="ExamLock has designed features and algorithms to detect and deter cheating and item theft."
          imageSrc="storage/layouts/activity_illustration.webp"
        />
        {/* Content safety features */}
        <WhatMakeCard
          icon="storage/layouts/content_safety.svg"
          title="Content safety features"
          description="Blocks all capabilities of screen sharing, which include: HDMI, UPnP, and VGA services"
          imageSrc="storage/layouts/content_safe_illustration.webp"
        />

        {/* Programmed to detect and block */}
        <WhatMakeCard
          icon="storage/layouts/detection.svg"
          title="Programmed to detect and block"
          description="ExamLock is built to work seamlessly on mobile devices, ensuring you are connected."
          imageSrc="storage/layouts/detect_block.webp"
        />
      </div>
    </section>
  );
}
