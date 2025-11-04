import Hero from "@/components/layout/PageHero";
import { Card, CardDescription, CardHeader } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Certification from "@/components/layout/Certification";
import Letter from "@/components/layout/Letter";

export default function Examlock() {
  return (
    <div>
      <Hero
        isDownload={false}
        badgeTitle="LMSc"
        title="Smart Learning. Real Results."
        description="Enhance performance, track progress, and ensure compliance with a
          Learning Management System built for results. From onboarding to
          certification, our LMS simplifies course delivery, centralizes assessment
          management, gives you the visibility to optimize learning and drive
          measurable outcomes."
      />
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          <Card>
            <CardHeader>
              Seamless Assessments
              <CardDescription>
                Easily embed assessments into learning paths. From quizzes to
                final exams, track performance in real time and ensure mastery
                at every stage. Leveraging longitudinal assessments and a
                Content Delivery Network (CDN) to manage and maintain a secure
                content repository.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              Streamlined Workflow
              <CardDescription>
                Automate course assignments, certification tracking, and learner
                notifications. Efficiency by design, no bottlenecks, no
                busywork.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              Data-Driven Decisions
              <CardDescription>
                Access analytics that go beyond completion rates. Identify
                learning gaps, monitor engagement, and refine programs based on
                hard data.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>
      <Certification description="Learning Management System is audited and certified by industry-leading third party standards." />
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <div className="bg-white rounded-2xl p-6 sm:py-8 sm:p-8 lg:p-16 flex flex-col lg:flex-row items-start lg:items-center gap-6 sm:gap-8">
          <div className="w-full lg:basis-1/2">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4 mb-8 lg:mb-0"
              defaultValue="item-1"
            >
              <AccordionItem
                className="bg-white px-5 rounded-lg font-light outline-1 outline-[#ececec]"
                value="item-1"
              >
                <AccordionTrigger className="text-prime text-[17px] text-base md:text-[19px]">
                  Better learning starts here.
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Empower learners with personalized content and clear
                    milestones. See higher retention, stronger results, and
                    lasting impact across your organization.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-white px-5 rounded-lg font-light outline-1 outline-[#ececec]"
                value="item-2"
              >
                <AccordionTrigger className="text-prime text-base md:text-[19px]">
                  Integrations
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Empower learners with personalized content and clear
                    milestones. See higher retention, stronger results, and
                    lasting impact across your organization.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-white px-5 rounded-lg font-light outline-1 outline-[#ececec]"
                value="item-3"
              >
                <AccordionTrigger className="text-prime text-base md:text-[19px]">
                  Ensure training meets compliance and quality standards.
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Empower learners with personalized content and clear
                    milestones. See higher retention, stronger results, and
                    lasting impact across your organization.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem
                className="bg-white px-5 rounded-lg font-light outline-1 outline-[#ececec]"
                value="item-4"
              >
                <AccordionTrigger className="text-prime text-base md:text-[19px]">
                  Clear, customizable dashboards.
                </AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                  <p>
                    Empower learners with personalized content and clear
                    milestones. See higher retention, stronger results, and
                    lasting impact across your organization.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="w-full lg:basis-1/2 bg-[#F9FAFB] border-1 rounded-lg p-3 sm:p-4 flex items-center justify-center">
            <img
              src="/products/better-learning.svg"
              alt="better learning"
              className="w-full max-w-[560px] h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
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
              What makes your LMS different from other learning platforms?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Our LMS is built specifically for organizations that need both
                learning and assessment capabilities. Unlike basic LMS
                platforms, we seamlessly integrate assessments directly into
                learning paths, use longitudinal assessment tracking to monitor
                progress over time, and include built-in Quality Management
                System(QMS) tools for compliance with ISO and regulatory
                requirements. It's designed for results, not just content
                delivery.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-white px-5 rounded-lg font-light"
            value="item-2"
          >
            <AccordionTrigger className="text-prime text-base md:text-[19px]">
              How does assessment integration work within the learning platform?
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
              Can your LMS integrate with our existing systems and content?
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
              What kind of reporting and analytics do you provide?
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
              How do you handle compliance and audit requirements?
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
      <section className="mx-auto w-full max-w-7xl my-20 px-4 xl:px-0">
        <Letter
          title="Get Started with LMS Today!"
          description="Start your free trial and request a personalized demo to explore our LMS!"
        />
      </section>
    </div>
  );
}
