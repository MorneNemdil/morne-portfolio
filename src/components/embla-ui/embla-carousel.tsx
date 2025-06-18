import { useEffect, useState, type JSX } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './embla-carousel-dot-button'
import { NextButton, PrevButton, usePrevNextButtons } from './embla-carousel-arrow-buttons'
import '@/embla.css';
import { Card } from '../ui/card'
import { useTheme } from '../theme-provider'

type EmblaCarouselProps = {
    slides: { index: number, content: JSX.Element }[]
    options?: EmblaOptionsType
}

const EmblaCarousel = (props: EmblaCarouselProps) => {
    const [lastIndex, setLastIndex] = useState<number | null>(null);

    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const { theme } = useTheme();

    const { selectedIndex, scrollSnaps, onDotButtonClick } =
        useDotButton(emblaApi)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const currentIndex = emblaApi?.selectedScrollSnap()!;
    const slideCount = emblaApi?.slideNodes().length!;

    const prevIndex = (currentIndex - 1 + slideCount) % slideCount;
    const nextIndex = (currentIndex + 1) % slideCount;

    const secondPrevIndex = (currentIndex - 2 + slideCount) % slideCount;
    const secondNextIndex = (currentIndex + 2) % slideCount;

    useEffect(() => {
        if (!emblaApi) return;

        const handler = () => {
            setLastIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", handler);

        return () => {
            emblaApi.off("select", handler);
        };
    }, [emblaApi]);

    return (
        <section className="embla">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                    {slides.map(({ index, content }) => (
                        <div className="embla__slide py-10 px-3 perspective-distant perspective-origin-right" key={index}>
                            <Card
                                className={`h-110 w-100
                                    ${index === prevIndex || index === secondPrevIndex ? "card-tilt-right" : ""}
                                    ${index === nextIndex || index === secondNextIndex ? "card-tilt-left" : ""}
                                    ${index === currentIndex && (index === lastIndex) ? "" : "no-tilt-transition"}
                                    ${index == currentIndex && "scale-105"}
                                `}
                            >
                                {content}
                            </Card>
                        </div>
                    ))}
                </div>
            </div>

            <div className="embla__controls">
                <div className="embla__buttons">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                </div>

                <div className="embla__dots">
                    {scrollSnaps.map((_, index) => (
                        <DotButton
                            key={index}
                            onClick={() => onDotButtonClick(index)}
                            className={(theme == 'dark' ? "dark-theme" : "").concat(' embla__dot'.concat(
                                index === selectedIndex ? ' embla__dot--selected' : '')
                            )}
                        />
                    ))}
                </div>

                <div className="embla__buttons">
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div>
        </section>
    )
}

export default EmblaCarousel
