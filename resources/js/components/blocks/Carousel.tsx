import SectionTitle from '@/components/common/SectionTitle';
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from '@/components/ui/EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselItem {
    title?: string;
    description?: string;
    cards?: {
        card_title: string;
        card_description: string;
    }[];
}

export default function Carousel({ title, description, cards }: CarouselItem) {
    const [emblaRef, emblaApi] = useEmblaCarousel();
    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <>
            <div className="mb-16 mt-16 px-4 md:mb-24 xl:px-0">
                <SectionTitle title={title} description={description} />
            </div>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container max-xl:mx-4">
                    {cards?.map((card, index) => (
                        <div className="embla__slide" key={index}>
                            <h4 className="mb-2 text-[1rem] font-medium">
                                {card.card_title}
                            </h4>
                            <p className="text-sm font-light md:text-base">
                                {card.card_description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mx-2 my-4 flex justify-end gap-4 max-xl:mx-4">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </>
    );
}
