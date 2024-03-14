"use client";

import sliderData from "./SliderHomeData";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function SliderHome() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="overflow-hidden  mb-8 rounded-lg"
      ref={emblaRef}>
      <div className="flex">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative p-1 w-full" key={item.id}>

              <img className="w-full h-full " src={item.Image} alt="" />

            </div>
          );
        })}
      </div>
    </div>
  );
}