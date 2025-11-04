import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQProps {
  title?: string;
  qna?: { question?: string; answer?: string }[];
}

export default function FAQ({ title, qna }: FAQProps) {
  return (
    <section className="mx-auto w-full max-w-7xl my-10 md:my-20 px-4 xl:px-0">
        <h2 className="text-prime text-3xl md:text-5xl font-medium mb-8 md:mb-16 text-center">
          {title}
        </h2>
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
      </section>
  )
}
