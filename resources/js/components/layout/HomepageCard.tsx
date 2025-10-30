import { Icon } from "@iconify/react";
import { Button } from "../ui/button";
import React from "react";
import RequestDemo from "../common/RequestDemo";

type HomepageCardProps = {
  badgeTitle?: string;
  title?: string;
  description?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  imageSrc?: string;
  titleClassName?: string;
  children?: React.ReactNode;
  cardButton?: boolean;
  imageClassName?: string;
};

function HomepageCard({
  badgeTitle,
  title,
  titleClassName,
  description,
  primaryLabel,
  secondaryLabel,
  imageSrc,
  children,
  cardButton = true,
  imageClassName,
}: HomepageCardProps) {
  return (
    <div className="bg-background rounded-2xl shadow-sm shadow-accent border border-gray-200 p-6 max-w-7xl mx-auto max-md:mb-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row lg:items-start gap-8 md:p-8">
        {/* Left side - Text content */}
        <div className="lg:w-1/2 space-y-5 md:space-y-8">
          <div className="flex items-center gap-2 border border-gray-200 bg-white shadow-lg rounded-full w-max p-1 pr-3 py-1">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
              <Icon
                icon="material-symbols-light:bolt"
                className="w-4 h-4 text-white"
              />
            </div>
            <span className="text-sm text-gray-600">{badgeTitle}</span>
          </div>
          <h3
            className={
              titleClassName ??
              "text-2xl md:text-3xl font-semibold text-gray-900"
            }
          >
            {title}
          </h3>
          <p className="text-neutral-700 text-sm md:text-md font-light">
            {description}
          </p>
          {children}

          {cardButton && (
            <div className="flex gap-4">
              <RequestDemo />
              <a href="/contact" className="w-full">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-1 border-primary text-primary max-sm:p-4 w-full sm:w-[150px] text-xs sm:text-sm"
                >
                  Contact Us
                </Button>
              </a>
            </div>
          )}
        </div>

        {/* Right side - Dashboard Image */}
        <div className="lg:w-1/2 h-full relative">
          <div className="absolute -inset-x-80 inset-y-[-180px] w-[calc(100%+4rem)] h-[calc(100%+8rem)] z-0 overflow-hidden">
            <img
              src="storage/images/dashboard_overlay.svg"
              alt="dot pattern"
              className="w-full h-full object-contain opacity-80"
            />
          </div>
          {/* Main dashboard image */}
          <img
            src={imageSrc}
            alt="ExamLock Dashboard Overview - Intuitive interface showing exam management and monitoring tools"
            className={imageClassName ?? `w-full border rounded md:border-none md:top-14 md:left-14 relative z-10 md:rounded-2xl `}
          />
        </div>
      </div>
    </div>
  );
}

export default HomepageCard;
