'use client';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



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

const Slideshow = () => {
  return (
    <section
      className="mb-10"
    >
      <Slide 
      arrows={false} 
      canSwipe={true} 
      infinite={true} 
      duration={3000}  
      transitionDuration={2000}
      
      >
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div className="bg-cover bg-no-repeat" style={{ 'backgroundImage': `url(${slideImage.url})`, height: '75vh', width:'100%'}}>

              {/**The shadow */}
              <div className='mask h-full flex items-center justify-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <h1 className='b-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight tracking-wider flex '>
                  {slideImage.caption}
                </h1>

                <p className='white-space: pre-line'>
                  {slideImage.desc}
                </p>

              </div>

            </div>
          </div>

        ))}
      </Slide>
    </section>
  )
}
export default Slideshow
