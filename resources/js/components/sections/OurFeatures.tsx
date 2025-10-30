import Featuredcard from "@/components/layout/FeaturedCard";
import { Button } from "@/components/ui/button";
import SectionTitle from "../common/SectionTitle";
import RequestDemo from "../common/RequestDemo";
import HomepageCard from "../layout/HomepageCard";

export default function PowerfulFeaturesSection() {
  return (
    <section className="container mx-auto px-4 xl:px-0 my-10 md:my-20">
      <SectionTitle
        badgeIcon
        badgeTitle="Our Features"
        title="Powerful features to boost your Security"
        description="ExamLock is a secure browser environment for test-taking."
      />

      <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Restricts screen capturing */}
        <Featuredcard
          badgeTitle="Ongoing security"
          title="Restricting Screen Capturing"
          description="Detects and stops screen sharing and mirroring across devices to secure your test content ."
          featuredImage="storage/images/screencapture.svg"
          icon="storage/images/screen-icon.svg"
        />

        {/* Restricts printing capability */}
        <Featuredcard
          badgeTitle="System Restrictions"
          title="Restricting Printing Capability"
          description="Disables system commands, keyboard shortcuts, and print options to prevent unauthorized actions."
          featuredImage="storage/images/printing-restriction.svg"
          icon="storage/images/focus-icon.svg"
          className="transform translate-x-3.5 lg:translate-y-12 lg:scale-110"
        />
      </div>
      <section className="mt-8">
        <HomepageCard
              badgeTitle="Webcam Tampering Detection"
              title="Restricts tampering with webcams"
              description="ExamLock restricts tampering with webcams by ensuring the camera
                    feed remains active and unaltered throughout the exam. It
                    prevents students from disabling, covering, or reducing the feed
                    with fake inputs, ensuring proctors always receive a genuine,
                    uninterrupted video stream."
              imageSrc="storage/images/webcam_tampering.svg"
              imageClassName="w-full h-auto z-10 relative"
            />
      </section>
    </section>
  );
}
