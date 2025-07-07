import type { JSX } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card } from "./ui/card";
import "@/my-css.css"
import SwipeLeftIndicator from "./swipe-left-indicator";

type WorkCarouselMobileProps = {
    slides: { index: number, content: JSX.Element }[];
}

const WorkCarouselMobile = ({ slides }: WorkCarouselMobileProps) => {
    return (
        <div className="flex flex-col items-center gap-8">
            <Carousel className="w-[70vw]">
                <CarouselContent>
                    {slides.map(slide => <CarouselItem className="!h-[50vh] md:!h-[60vh] lg:!h-[70vh]" key={slide.index}>
                        <Card className="h-full">{slide.content}</Card>
                    </CarouselItem>)}
                </CarouselContent>
            </Carousel>
            <SwipeLeftIndicator />
        </div>
    )
}

export default WorkCarouselMobile