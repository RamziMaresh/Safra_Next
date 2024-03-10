import { HiShare, HiDeviceMobile, HiCash, HiLightningBolt, HiBadgeCheck } from 'react-icons/hi';
import { BiCoffeeTogo } from 'react-icons/bi';


const features = [
    {
        icon: <HiBadgeCheck/>,
        name: 'CERTIFIED PARTNERS',
        desc: 'Explore quality cafes, hand- selected by our experts'
    },
    {
        icon: <HiShare/>,
        name: 'SHARE YOUR NAME',
        desc: 'Invite your friends and family and give them the privilige of extra discounts and gifts'
    },
    {
        icon: <HiDeviceMobile/>,
        name: 'EASY ACCESS',
        desc: 'Reach all the features in one single platform'
    },
    {
        icon: <BiCoffeeTogo/>,
        name: 'SPECIALTY COFFEE',
        desc: 'Enjoy the high quality of coffee with more options of Coffee type'
    },
    {
        icon: <HiCash/>,
        name: 'SAVE YOUR MONEY',
        desc: 'Save Up To 6000 AED a year, with our special offers'
    },
    {
        icon: <HiLightningBolt/>,
        name: 'PREMIUM SERVICES',
        desc: 'Reach us through all the social media accounts'
    },
]

const Features = () => {

    return (
        <div id='features' className="flex justify-center items-center text-center">
            <div className="py-12 space-y-12">
                <h1 className="text-2xl font-black">EXPLORE OUR FEATURES</h1>
                <div className='flex flex-wrap m-auto w-full md:w-[80%] justify-center items-center '>
                    {
                        features.map(feature => {
                            return (
                                <div>
                                    <div className='flex flex-col cursor-grab justify-center items-center mb-8 space-y-4 hover:bg-[rgba(0,0,0,.015)] group rounded-3xl duration-200 transition p-2'>
                                        <div className="text-5xl text-[#b0d5a4] bg-[rgba(0,0,0,.015)] rounded-full p-4 group-hover:bg-[rgba(0,0,0,.0)] group-hover:animate-spin">
                                        { feature.icon }
                                        </div>
                                        <h1 className='font-black text-teal-700'>
                                        { feature.name }
                                        </h1>
                                        <p className='md:w-1/2 text-sm pb-4'>
                                        { feature.desc }
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }             
                </div>
            </div>
        </div>
    )
}

export default Features