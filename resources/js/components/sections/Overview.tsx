import SectionTitle from "../common/SectionTitle";
import HomepageCard from "../layout/HomepageCard";
import { Icon } from "@iconify/react";

export default function DashboardSection() {
  return (
    <section className="mx-auto px-4 xl:px-0 my-10 md:my-20">
      {/* Centered header section */}
      <SectionTitle
        desClassName="md:max-w-7xl mx-auto text-sm md:text-xl text-gray-600 font-light"
        badgeIcon
        badgeTitle="Overview"
        title="A clear and intuitive dashboard"
        description="Designed to be simple, intuitive, and easy to navigate, giving users instant access to essential tools and insights."
      />

      {/* Card container with content */}
      <HomepageCard
        badgeTitle="Dashboard Overview"
        title="Intuitive dashboard"
        description="ExamLock's dashboard is designed to give you everything you need at a glance. With a clean, modern interface, you can monitor."
        primaryLabel="Book a Demo"
        secondaryLabel="Contact Us"
        imageSrc="storage/images/dashboard_2.png"
      >
        {/* children: features grid specific to the Dashboard section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          <div className="flex-1">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 md:mb-3 bg-white text-primary rounded-full border-1 inset-shadow-md md:mx-0">
              <Icon icon="ri:article-line" className="size-5 md:size-6" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 pt-1 md:pt-2 md:text-left">
              Personalized dashboard
            </h4>
            <p className="text-gray-600 pt-1 md:pt-2 text-sm md:text-base md:text-left">
              Easily customize your widgets.
            </p>
          </div>

          <div className="flex-1">
            <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mb-2 md:mb-3 bg-white text-primary rounded-full border-1 inset-shadow-md md:mx-0">
              <Icon icon="heroicons:bolt" className="size-5 md:size-6" />
            </div>
            <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-1 md:mb-2 md:text-left">
              Quick overview
            </h4>
            <p className="text-gray-600 text-sm md:text-base md:text-left">
              Monitor your upcoming exams with ease.
            </p>
          </div>
        </div>
      </HomepageCard>
    </section>
  );
}
