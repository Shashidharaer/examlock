import Hero from "@/components/layout/Hero";
import InfoCard from "@/components/layout/info-card";
import { Icon } from "@iconify/react";
import Certification from "@/components/layout/Certification";
import { BlockProps } from "@/types/statamic";

export default function ExamLens({ block, ...props }: BlockProps) {
  return (
    <div>
      <Hero {...props} />
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <InfoCard
          badgeTitle="Assessment Creation"
          title="Flexible & Familiar Assessment Creation"
          imageSrc="/products/paper.svg"
          reverse
        >
          <p className="text-sm md:text-base mt-6 font-light text-gray-700">
            Use what you already have or start fresh.
          </p>

          <ul className="mt-3 list-disc list-outside pl-5 sm:pl-6 text-sm md:text-base font-light text-gray-700 space-y-2">
            <li>Turn existing assignments into scannable forms</li>
            <li>
              Quickly build bubble sheets, exit tickets, rubrics, quizzes, and
              more
            </li>
            <li>
              Mix question types: multiple choice, fill-in-the-blank, number
              grid, math, and open-ended
            </li>
            <li>
              Auto-grade objective items and review open responses digitally
              even complex handwritten math
            </li>
          </ul>
        </InfoCard>
      </section>
      <Certification description="ExamLens is audited and certified by industry-leading third party standards." />

      {/* Standards Section */}
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <div className="bg-white rounded-2xl py-4 md:py-8 sm:py-12 px-4 sm:p-8 lg:p-16">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-2 border border-gray-200 bg-white rounded-full w-max p-1 pr-3 shadow-sm/4 inset-shadow-md">
              <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
                <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm text-gray-600">Standards</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-medium text-prime mt-4 mb-3">
              Standards-Aligned by Design
            </h3>
            <p className="max-w-3xl text-sm sm:text-base">
              Easily tag questions with national, state, or custom
              standards—including Common Core, NGSS, AP, ACT, and more.
            </p>
          </div>

          <div className="mt-8 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-start">
            <div className="space-y-6 sm:space-y-8">
              <div className="p-4 sm:p-5 bg-white rounded-lg w-full border-1">
                <h6 className="text-prime md:text-md sm:text-xl">
                  Easy Print & Scan
                </h6>
                <ul className="text-sm md:text-base font-light list-disc list-outside pl-5 sm:pl-6 mt-3 sm:mt-4 space-y-2">
                  <li>
                    Print forms standalone or embed them in existing worksheets
                  </li>
                  <li>Pre-fill with student info or print blank sheets</li>
                  <li>Scan using any device: smartphone, tablet, webcam</li>
                  <li>
                    Teachers or students can scan—no special equipment needed
                  </li>
                </ul>
              </div>

              <div className="p-4 sm:p-5 bg-white rounded-lg w-full border-1">
                <h6 className="text-prime md:text-md sm:text-xl">
                  Smarter Grading & Reporting
                </h6>
                <ul className="text-sm md:text-base font-light list-disc list-outside pl-5 sm:pl-6 mt-3 sm:mt-4 space-y-2">
                  <li>
                    Print forms standalone or embed them in existing worksheets
                  </li>
                  <li>Pre-fill with student info or print blank sheets</li>
                  <li>Scan using any device: smartphone, tablet, webcam</li>
                  <li>
                    Teachers or students can scan—no special equipment needed
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-[#F9FAFB] rounded-lg border-1 p-4 sm:p-6 flex items-center justify-center">
              <img
                src="/products/standards.svg"
                alt="Standards Aligned"
                className="w-full max-w-[520px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
