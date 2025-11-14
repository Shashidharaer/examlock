import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import SectionTitle from "./SectionTitle";

interface FAQProps {
  title?: string;
  qna?: { question?: string; answer?: string }[];
}

export default function FAQ({ title, qna }: FAQProps) {
  return (
    <section className="w-full my-10 md:my-20 px-4">
      <div className="max-w-7xl mx-auto ">
        <SectionTitle title="FAQ" />
        <Accordion
          type="single"
          collapsible
          className="w-full flex flex-col gap-4 mb-20"
          defaultValue="item-1"
        >
          {qna?.map((item, index) => (
            <AccordionItem
              key={index}
              className="bg-white px-5 rounded-lg font-light"
              value={`item-${index + 1}`}
            >
              <AccordionTrigger className="text-prime text-base md:text-[19px]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
