import type { JSX } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";

type WorkCarouselMobileProps = {
    slides: { index: number, content: JSX.Element }[];
}

const WorkCarouselMobile = ({ slides }: WorkCarouselMobileProps) => {
    return (
        <Carousel className="w-[70vw]">
            <CarouselContent>
                {slides.map(slide => <CarouselItem className="!h-[50vh] md:!h-[60vh] lg:!h-[70vh]" key={slide.index}>
                    <Card className="h-full">{slide.content}</Card>
                </CarouselItem>)}
            </CarouselContent>
        </Carousel>
    )
}

export default WorkCarouselMobile