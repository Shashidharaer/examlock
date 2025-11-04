import Hero from "@/components/layout/PageHero";
import InfoCard from "@/components/layout/info-card";
import Letter from "@/components/layout/Letter";
import SectionTitle from "@/components/common/SectionTitle";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icon } from "@iconify/react";
import Certification from "@/components/layout/Certification";

export default function ExamLens() {
  return (
    <div>
      <Hero
        badgeTitle="ExamLens"
        title="Keep What Works. Enhance What's Possible."
        description="Deliver paper-based assessments, scan answer sheets with any device, and access instant digital insights, all with Gradient's smart scanning technology."
      />
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 lg:mb-40 px-4 xl:px-0">
        <SectionTitle
          title="Why Choose Paper?"
          description="Paper assessments remain a trusted method, now enhanced with automatic scoring and real-time data."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10">
          <span className="flex flex-col items-center text-center gap-4 px-4 bg-white rounded-lg shadow-md py-6">
            <p>Preserve academic integrity</p>
          </span>
          <span className="flex flex-col items-center text-center gap-4 px-4 bg-white rounded-lg shadow-md py-6">
            <p>Avoid tech disruptions</p>
          </span>
          <span className="flex flex-col items-center text-center gap-4 px-4 bg-white rounded-lg shadow-md py-6">
            <p>Reduce student screen fatigue</p>
          </span>
        </div>
      </section>
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
      {/* Standards Section end */}

      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <h2 className="text-prime text-3xl md:text-5xl font-medium mb-8 md:mb-16 text-center">
          FAQs
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4 mb-20"
          defaultValue="item-1"
        >
          <AccordionItem
            className="bg-white px-5 rounded-lg font-light"
            value="item-1"
          >
            <AccordionTrigger className="text-prime text-base md:text-[19px]">
              What is ExamLens and how does it work?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                ExamLens lets you keep using paper tests while getting all the
                benefits of digital grading. You create or use existing paper
                assessments, students take them normally with pencil and paper,
                then you scan the answer sheets with any device (phone, tablet,
                webcam) to get instant digital results and insights.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-white px-5 rounded-lg font-light"
            value="item-2"
          >
            <AccordionTrigger className="text-prime text-base md:text-[19px]">
              Do I need special equipment or scanners to use ExamLens?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We offer worldwide shipping through trusted courier partners.
                Standard delivery takes 3-5 business days, while express
                shipping ensures delivery within 1-2 business days.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-white px-5 rounded-lg font-light"
            value="item-3"
          >
            <AccordionTrigger className="text-prime text-base md:text-[19px]">
              Can I use my existing tests and worksheets?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-white px-5 rounded-lg font-light"
            value="item-4"
          >
            <AccordionTrigger className="text-prime text-base md:text-[19px]">
              What happens if I need to change an answer key after students have
              taken the test?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-white px-5 rounded-lg font-light"
            value="item-5"
          >
            <AccordionTrigger className="text-prime text-base md:text-[19px]">
              How do I get the results into my gradebook or learning management
              system?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                We stand behind our products with a comprehensive 30-day return
                policy. If you&apos;re not completely satisfied, simply return
                the item in its original condition.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <Letter
          title="All Results, One View"
          description="Combine paper and online delivery—see all your data in one place. Reach out to us today to learn more."
        />
      </section>
    </div>
  );
}
