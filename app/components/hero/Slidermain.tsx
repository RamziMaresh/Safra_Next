

'use client';

import Slider from "@madzadev/image-slider";
import "@madzadev/image-slider/dist/index.css";



const Images = [
  {
    url: '/assets/about/background.jpeg',
    caption: 'Solutions For Better Living 1',
    desc: '',
  },
  {
    url: '/assets/about/background.jpg',
    caption: 'Solutions For Better Living 2',
    desc: '',
  },
  {
    url: '/assets/about/background.jpeg',
    caption: 'Solutions For Better Living 3',
    desc: '',
  },
];


const Slideshow = () => {
  return (
    <section
      id="home"
      className="
    ">
      <div className=" w-full h-full bg-cover bg-no-repea">
        <Slider
          loop={true}
          autoPlay={true}
          autoPlayInterval={3000} // in milliseconds
          showArrowControls={false}
          showDotControls={true}
          
          
        imageList={Images} height={500} width='100%'
        />

          <div className='mask h-full flex items-center justify-center ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          </div>

      </div>
    </section>
  )
}
export default Slideshow