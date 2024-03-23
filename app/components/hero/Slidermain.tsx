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
    url: '/assets/about/slidertwo.png',
    caption: ''
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container mb-6">
        <Slide arrows={false}>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div className="bg-cover bg-no-repeat w-full h-full bg-custom-image h-[65vh]" style={{'backgroundImage': `url(${slideImage.url})`}}>
              <div className='mask h-full flex items-center justify-center ' style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}>

                <h1 className='b-5 text-3xl font-bold leading-tight text-white dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight tracking-wider'>{slideImage.caption}</h1>
            </div>
            </div>
            </div>

          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow