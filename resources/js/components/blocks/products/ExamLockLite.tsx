
import Hero from "@/components/layout/PageHero";
import { Icon } from "@iconify/react";
import Letter from "@/components/layout/Letter";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Certification from "@/components/layout/Certification";

const cardDetails: { title: string; description: string; image: string }[] = [
  {
    title: "No Distractions Allowed",
    description:
      "ExamLock Lite automatically restricts opening of additional tabs during assessments, ensuring candidates stay focused on the test.",
    image: "/products/no_distraction.svg",
  },
  {
    title: "No Cheating Shortcuts",
    description:
      "Key combinations like copy, paste, print screen, and other shortcuts are smartly detected and blocked in real-time.",
    image: "/products/no_cheating.svg",
  },
  {
    title: "Full-Screen Mode Only",
    description:
      "Once the test starts, the browser switches to non-resizable full-screen mode, users cannot minimize, switch windows, or multitask.",
    image: "/products/full-screen.svg",
  },
];

export default function ExamLockLite() {
  return (
    <div>
      <Hero
        isExtention
        badgeTitle="ExamLock Lite"
        title="Lock Down Exams with Confidence"
        description="ExamLock Lite Browser Extension offers a secure and controlled environment for online assessments ensuring academic integrity with every"
      />
      <section className="max-w-7xl mx-auto px-4 xl:px-0 py-8 md:py-16 text-center">
        <h4 className="text-prime text-3xl sm:text-4xl md:text-5xl font-medium md:my-4">
          Focused. Restricted. Reliable.
        </h4>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardDetails.map((items) => {
            return (
              <Card
                key={items.title}
                className="flex h-full w-full flex-col mt-0 shadow-sm py-2"
              >
                <CardHeader className="w-full px-2">
                  <img
                    className="w-full h-full object-contain rounded-lg"
                    src={items.image}
                    alt={items.title}
                  />
                  <div className="mt-4 px-4 pb-4">
                    <CardTitle className="text-left mb-3 md:text-md sm:text-xl font-light text-prime">
                      {items.title}
                    </CardTitle>
                    <CardDescription className="text-left">
                      {items.description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>
      <Certification description="ExamLock Lite is audited and certified by industry-leading third party standards." />
      <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <div className="flex flex-col gap-4 justify-center items-center bg-white font-light p-6 sm:p-8 md:p-11 w-full rounded-3xl shadow-lg/1 max-w-7xl mx-auto my-10 md:my-20">
          <div className="flex items-center gap-2 border border-gray-200 bg-white shadow-lg rounded-full w-max p-1 pr-3 py-1">
            <div className="w-6 h-6 rounded-full flex items-center justify-center bg-shine">
              <Icon icon="gg:loadbar-doc" className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm text-gray-600">
              Intelligent Monitoring
            </span>
          </div>
          <h4 className="text-prime font-medium text-2xl sm:text-3xl md:text-4xl mb-2 text-center">
            Intelligent Monitoring, Subtle Surveillance
          </h4>
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 w-full">
            <img
              className="w-full md:w-1/2 md:max-w-[520px] rounded-2xl border-1 p-4 bg-neutral-100/50 object-contain"
              src="/products/intelligent-monitoring.svg"
              alt="intelligent monitoring"
            />
            <div className="flex flex-col gap-4 w-full md:flex-1">
              <div>
                <h6 className="text-prime md:text-md mb-2 font-medium">
                  Randomized Screenshots & pictures
                </h6>
                <p className="text-sm md:text-base text-neutral-600">
                  ExamLock Lite captures screenshots & pictures of candidates at
                  random intervals, providing an extra layer of evidence and
                  visibility during the test.
                </p>
              </div>
              <div>
                <h6 className="text-prime md:text-md mb-2 font-medium">
                  Mouse and Activity Tracking
                </h6>
                <p className="text-sm md:text-base text-neutral-600">
                  Keep track of every move. The extension logs mouse movements
                  and overall user activity, flagging suspicious behavior
                  automatically.
                </p>
              </div>
              <div>
                <h6 className="text-prime md:text-md mb-2 font-medium">
                  Allow Only What's Needed
                </h6>
                <p className="text-sm md:text-base text-neutral-600">
                  Grant access only to authorized URLs. Everything else? Locked
                  out.
                </p>
              </div>
              <div>
                <h6 className="text-prime md:text-md mb-2 font-medium">
                  AI Extension detection
                </h6>
                <p className="text-sm md:text-base text-neutral-600">
                  Scans for AI-enabled extensions and ensures they are disabled
                  before candidates start their exam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
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
              What exactly does ExamLock Lite do during an exam?
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                ExamLock Lite is a browser extension that creates a secure
                testing environment by locking down the browser. It prevents
                students from opening new tabs, blocks keyboard shortcuts like
                copy/paste, forces full-screen mode, and restricts access to
                unauthorized websites. Think of it as putting the browser in
                "test mode" where only the exam can be accessed.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            className="bg-white px-5 rounded-lg font-light"
            value="item-2"
          >
            <AccordionTrigger className="text-prime text-base md:text-[19px]">
              How does ExamLock Lite monitor students during exams?
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
              Can students cheat by using AI tools or extensions with ExamLock
              Lite installed?
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
              Is ExamLock Lite difficult to set up and deploy for our
              institution?
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
              How secure and reliable is ExamLock Lite for high-stakes testing?
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
          title="Simple to Deploy. Tough to Beat."
          description="With lightweight architecture and smart features, ExamLock Lite strengthens the security of your online assessments without disrupting user experience."
        />
      </section>
    </div>
  );
}
