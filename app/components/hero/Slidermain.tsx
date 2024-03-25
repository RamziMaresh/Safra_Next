'use client';
import Slider from "react-slick";


const slideImages = [
  {
    url: '/assets/about/background.jpeg',
    caption: 'Solutions For Better Living 1',
    desc: '',
  },
  {
    url: '/assets/about/background.jpeg',
    caption: 'Solutions For Better Living 2',
    desc: '',
  },
  {
    url: '/assets/about/background.jpeg',
    caption: 'Solutions For Better Living 3',
    desc: '',
  },
];

const Slidemain = () => {
  return (
    <section
      className="mb-10"
    >
      <Slider 
      autoplay={true}
      swipeToSlide={true}
      arrows={false} 
      infinite={true} 
      useTransform={true}
      autoplaySpeed={3000}
      dots={true}
      
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className="bg-cover bg-no-repeat" style={{ 'backgroundImage': `url(${slideImage.url})`, height: '70vh', width:'100%'}}>

              {/**The shadow */}
              <div className='mask h-full flex items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <h1 className='text-2xl font-bold leading-tight text-white  sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight tracking-wider '>
                  {slideImage.caption}
                </h1>

                <p className='white-space: pre-line'>
                  {slideImage.desc}
                </p>

              </div>
          
            </div>
          </div>

        ))}
      </Slider>
    </section>
  )
}
export default Slidemain
