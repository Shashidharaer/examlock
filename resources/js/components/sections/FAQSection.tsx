import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SectionTitle from '../common/SectionTitle';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQItemProps {
  badge_icon_text?: string;
  title?: string;
  description?: string;
  faq?: { [key: string]: string }[];
}

const transformFaqData = (
  faqData: { [key: string]: string }[] | undefined,
): FAQ[] => {
  if (!faqData) {
    return [];
  }

  const faqs: FAQ[] = [];
  for (let i = 1; i <= 5; i++) {
    const questionKey = `question_${i}`;
    const answerKey = `q${i}_answer`;

    // Find the object that contains the question and answer
    const questionItem = faqData.find((item) => item[questionKey]);
    const answerItem = faqData.find((item) => item[answerKey]);

    if (questionItem && answerItem) {
      faqs.push({
        question: questionItem[questionKey],
        answer: answerItem[answerKey],
      });
    }
  }
  return faqs;
};

export default function FAQSection({
  faq,
  badge_icon_text,
  title,
  description,
}: FAQItemProps) {
  const faqList = transformFaqData(faq);

  return (
    <section className="container mx-auto my-10 px-4 md:my-20">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl">
          <div className="flex flex-col gap-8 lg:flex-row">
            {/* Left side - FAQ Info */}
            <div className="lg:w-1/2">
              <SectionTitle
                desClassName="md:max-w-7xl mx-auto text-sm md:text-xl text-gray-600 font-light"
                badgeIcon
                badgeTitle={badge_icon_text}
                className="text-left"
                title={title}
                description={description}
              />
            </div>

            {/* Right side - FAQ Items */}
            <div className="space-y-4 lg:w-1/2">
              <Accordion
                type="single"
                collapsible
                className="flex flex-col gap-4"
              >
                {faqList.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className={`border-b border-gray-200 data-[state=open]:bg-white`}
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between px-4 py-6 text-left data-[state=open]:bg-white">
                      <span className="font-medium md:text-xl">
                        {item.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="border-t border-gray-200 px-4 pb-4 data-[state=open]:bg-white">
                      <p className="md:text-md pt-3 font-light text-gray-600">
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
