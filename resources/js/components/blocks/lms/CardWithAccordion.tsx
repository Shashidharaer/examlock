import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion';

interface CardWithAccordionProps {
    accordion_list?: {
        accordion_title?: string;
        accordion_description?: string;
    }[];
    card_image?: string;
}

export default function CardWithAccordion({
    accordion_list,
    card_image,
}: CardWithAccordionProps) {
    return (
        <section className="mx-auto my-10 w-full max-w-7xl px-4 md:my-20 xl:px-0">
            <div className="flex flex-col items-start gap-6 rounded-2xl bg-white p-6 sm:gap-8 sm:p-8 sm:py-8 lg:flex-row lg:items-center lg:p-16">
                <div className="w-full lg:basis-1/2">
                    <Accordion
                        type="single"
                        collapsible
                        className="mb-8 flex w-full flex-col gap-4 lg:mb-0"
                        defaultValue="item-1"
                    >
                        {accordion_list?.map((item, index) => {
                            return (
                                <AccordionItem
                                    className="rounded-lg bg-white px-5 font-light outline-1 outline-[#ececec]"
                                    value={`item-${index + 1}`}
                                >
                                    <AccordionTrigger className="text-prime text-[17px] text-base md:text-[19px]">
                                        {item.accordion_title}
                                    </AccordionTrigger>
                                    <AccordionContent className="flex flex-col gap-4 text-balance">
                                        <p>{item.accordion_description}</p>
                                    </AccordionContent>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </div>
                <div className="border-1 flex w-full items-center justify-center rounded-lg bg-[#F9FAFB] p-3 sm:p-4 lg:basis-1/2">
                    <img
                        src={`/storage/${card_image ?? 'layouts/better_learning_illustration.webp'}`}
                        alt="better learning"
                        className="h-auto w-full max-w-[560px] object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
