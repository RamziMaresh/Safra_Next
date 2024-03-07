"use client";

import sliderData from "./sliderData";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className="overflow-hidden bg-gray-300 mb-8 rounded-lg"
      ref={emblaRef}>
      <div className="flex">
        {sliderData?.map((item) => {
          return (
            <div className="embla__slide relative p-2 w-full" key={item.id}>

              {/* the image */}
              <img className="w-full h-full " src={item.Image} alt="" />

              {/* title/subtitle 
              <h1 className="absolute top-1/2 left-1/2 w-full md:w-auto transform -translate-x-1/2 
              translate-y-[3rem] md:translate-y-[9rem]  
              lg:translate-y-48 bg-cyan-600 py-2 lg:py-4 px-2 lg:px-8 text-xl 
              lg:text-2xl text-white font-extrabold">
                {item.title}
              </h1>
              */}
            </div>
          );
        })}
      </div>
    </div>
  );
}