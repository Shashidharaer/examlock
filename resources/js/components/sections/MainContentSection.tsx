import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

interface MainContentSectionProps{
  title?: string;
  description?: string;
  image?: string[];
}

export default function MainContentSection({ title, description, image }: MainContentSectionProps) {
  const imageUrl = image && image.length > 0 ? `/storage/${image[0]}` : '';
  return (
    <section className="w-full mx-auto px-4 py-8 md:py-16">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl md:rounded-[3.75rem] border-2xl shadow-sm p-8 lg:p-12 relative 2xl:after:absolute 2xl:after:right-[-11rem] 2xl:after:top-[-16rem] 2xl:after:w-[14rem] 2xl:after:h-full 2xl:after:bg-[url('/storage/layouts/exam_content.webp')] 2xl:after:bg-no-repeat 2xl:after:bg-contain 2xl:before:absolute 2xl:before:left-[-8rem] 2xl:before:top-[-12rem] 2xl:before:w-[6rem] 2xl:before:h-full 2xl:before:bg-[url('/storage/layouts/lock.webp')] 2xl:before:bg-no-repeat 2xl:before:bg-contain">
        <span>
          <img
            src="/storage/layouts/sparkle.webp"
            alt="sparkle element"
            className="absolute left-2 top-4 md:left-8 md:top-10"
          />
        </span>
        <div className="grid lg:grid-cols-2 md:gap-12 items-start md:p-8">
          {/* Left Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-[3rem] font-medium text-prime text-balance">
              {title}
            </h2>
            <p className="md:text-md text-[#606060] font-light leading-relaxed">
              {description}
            </p>
            <Button
              variant="outline"
              size="lg"
              className="md:my-4"
            >
              Learn More
            </Button>
          </div>

          {/* Right Content - Dashboard Mockup */}
          <div className="relative">
            <img
              src={imageUrl}
              alt="ExamLock Dashboard Mockup"
              className="w-full h-auto"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Features Section - Inside the main card */}
        <div className="mt-4 border-gray-100 md:px-8 md:pb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-shine rounded-sm flex items-center justify-center flex-shrink-0">
                <Icon icon="ri:qr-code-fill" className="text-white text-2xl" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Strengthened Security Measures
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-shine to-85% rounded-sm flex items-center justify-center flex-shrink-0">
                <Icon
                  icon="ri:shield-keyhole-fill"
                  className="text-white text-2xl"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Enhanced Security Reinforcement
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-shine rounded-sm flex items-center justify-center flex-shrink-0">
                <Icon
                  icon="ri:lightbulb-fill"
                  className="text-white text-2xl"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Guarded Content Integrity
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-shine to-85% rounded-sm flex items-center justify-center flex-shrink-0">
                <Icon
                  icon="material-symbols:webhook-rounded"
                  className="text-white text-2xl"
                />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm">
                Third-Party Integration
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
