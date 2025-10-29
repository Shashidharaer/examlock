"use client";

import SectionTitle from "../common/SectionTitle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "What is ExamLock?",
    answer:
      "ExamLock is a comprehensive exam proctoring and monitoring solution designed to ensure the integrity of online assessments. It provides advanced security features to prevent cheating and maintain fair testing environments.",
  },
  {
    question: "What does ExamLock offer?",
    answer:
      "ExamLock offers real-time monitoring, browser lockdown, webcam monitoring, screen recording, plagiarism detection, and comprehensive reporting tools to ensure secure online examinations.",
  },
  {
    question: "What are the core features of ExamLock?",
    answer:
      "Core features include browser security, webcam monitoring, screen capture prevention, real-time alerts, detailed analytics, customizable settings, and integration with popular LMS platforms.",
  },
  {
    question: "How can ExamLock help my business?",
    answer:
      "ExamLock helps businesses maintain exam integrity, reduce administrative overhead, provide detailed insights, ensure compliance with security standards, and build trust with stakeholders through secure assessment processes.",
  },
  {
    question: "Is ExamLock suitable for businesses of all sizes?",
    answer:
      "Yes, ExamLock is designed to scale from small educational institutions to large enterprises, offering flexible pricing plans and customizable features to meet the needs of organizations of any size.",
  },
];

export default function FAQSection() {
  // const [activeItem, setActiveItem] = useState<number | null>(null);

  // const toggleItem = (index: number) => {
  //   setActiveItem((prev) => (prev === index ? null : index));
  // };

  return (
    <section className="container mx-auto px-4 my-10 md:my-20">
      <div className="max-w-7xl mx-auto">
        <div className=" rounded-2xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left side - FAQ Info */}
            <div className="lg:w-1/2">
              <SectionTitle
                badgeIcon
                desClassName="md:max-w-7xl mx-auto text-sm md:text-xl text-gray-600 font-light"
                className="text-left"
                badgeTitle="FAQ"
                title="Frequently Asked Questions"
                description="For any unanswered questions, reach out to our support team via email. We'll respond as soon as possible to assist you."
              />
            </div>

            {/* Right side - FAQ Items */}
            <div className="lg:w-1/2 space-y-4">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-4"
              >
                {faqData.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border-b border-gray-200 data-[state=open]:bg-white`}
                  >
                    <AccordionTrigger className="px-4 py-6 text-left w-full flex justify-between items-center data-[state=open]:bg-white">
                      <span className="md:text-xl font-medium">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 border-t border-gray-200 data-[state=open]:bg-white">
                      <p className="text-gray-600 pt-3 md:text-md font-light">
                        {item.answer}
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
