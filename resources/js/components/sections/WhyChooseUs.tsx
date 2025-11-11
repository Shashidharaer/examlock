import SectionTitle from '../common/SectionTitle';
import WhatMakeCard from '../ui/WhatMakeCard';

interface WhyChooseUsProps {
  badge_icon_text?: string;
  title?: string;
  description?: string;
}

export default function WhyChooseUs({
  badge_icon_text,
  title,
  description,
}: WhyChooseUsProps) {
  return (
    <section className="w-full mx-auto my-10 px-4 md:my-20">
      <div className='max-w-7xl mx-auto'>
        <SectionTitle
          desClassName="md:max-w-7xl mx-auto text-sm md:text-xl text-gray-600 font-light"
          badgeIcon
          badgeTitle={badge_icon_text}
          title={title}
          description={description}
        />

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          
          <WhatMakeCard
            icon="storage/layouts/activity.svg"
            title="Activity tracking & insights"
            description="ExamLock has designed features and algorithms to detect and deter cheating and item theft."
            imageSrc="storage/layouts/activity_illustration.webp"
          />
          
          <WhatMakeCard
            icon="storage/layouts/content_safety.svg"
            title="Content safety features"
            description="Blocks all capabilities of screen sharing, which include: HDMI, UPnP, and VGA services"
            imageSrc="storage/layouts/content_safe_illustration.webp"
          />

          <WhatMakeCard
            icon="storage/layouts/detection.svg"
            title="Programmed to detect and block"
            description="ExamLock is built to work seamlessly on mobile devices, ensuring you are connected."
            imageSrc="storage/layouts/detect_block.webp"
          />
        </div>
      </div>
    </section>
  );
}
