'use client';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



const slideImages = [
  {
    url: '/assets/about/background.jpeg',
    caption: 'Solutions For Better Living'
  },
  {
    url: '/assets/about/slidertwo.png',
    caption: ''
  },
  {
    url: '/assets/about/background.jpeg',
    caption: ''
  },
];

const Slideshow = () => {
    return (
      <section 
      className="mb-10"
      >
        <Slide arrows={false} canSwipe={true} infinite={true} >
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className="bg-cover bg-no-repeat w-full h-full bg-custom-image h-full" style={{'backgroundImage': `url(${slideImage.url})`, height : 550 }}>
              <div className='mask h-full flex items-center justify-center ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                <h1 className='b-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight tracking-wider'>{slideImage.caption}</h1>
            </div>
            </div>
            </div>

          ))} 
        </Slide>
      </section>
    )
}
export default Slideshow