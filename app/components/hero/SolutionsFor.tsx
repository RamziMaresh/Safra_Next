'use client';

import { useMediaQuery } from 'react-responsive';

import Image from 'next/image';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Img1 from './partners/010.png'
import Img2 from './partners/012.png'
import Img3 from './partners/013.png'
import Img4 from './partners/014.png'
import Img5 from './partners/015.png'
import Img6 from './partners/016.png'
import Img7 from './partners/017.png'
import Img8 from './partners/018.png'
import Img9 from './partners/019.png'
import Features from './Features';


const partners = [
    { image: Img1 },
    { image: Img2 },
    { image: Img3 },
    { image: Img4 },
    { image: Img5 },
    { image: Img6 },
    { image: Img7 },
    { image: Img8 },
    { image: Img9 },


]
const Solutions = () => {
    const isMediumScreen = useMediaQuery({ query: `(max-width: 768px)` });

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: isMediumScreen ? 2 : 7,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true
    };

    return (
        <div className="overflow-hidden pb-24 dark:bg-gray-dark " id='partners'>

            <div className="px-14 pt-12 space-y-12 pb-4 text-center bg-gray-50">
                <h2 className="text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[35px] tracking-wide capitalize">
                    Total Quality Managment
                </h2>
            </div>
            <Features />
            <div className="px-14 pt-12 mb-12  pb-4 text-center">
                <h2 className="text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[35px] tracking-wide capitalize">
                    Safra Solution 
                </h2>
            </div>
            <Slider {...settings} >
                {
                    partners.map((partner) => {
                        return (
                            <div key="" className='p-1'>
                                <Image src={partner.image} alt='' key="" />
                            </div>
                        )
                    })
                }
            </Slider>

        </div>
    )
}

export default Solutions


/**
                
                <p className="mb-10 capitalize text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Our product portfolio has been identified as one of our core competencies, giving us a competitive edge in the local, regional and international markets.
                                    </p>
                                     */