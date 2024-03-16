import { HiBadgeCheck } from 'react-icons/hi';
import { TbCirclesRelation } from "react-icons/tb";
import { SiSalesforce  } from "react-icons/si";
import { MdProductionQuantityLimits } from "react-icons/md";

const features = [
    {
        id: 1,
        icon: <HiBadgeCheck />,
        name: 'Logistics',
        desc: 'Our full-fieldged logistics department is an integral part of our commitment to meet customers requests and to ensuring prompt deliveries.'
    },
    {
        id: 2,
        icon: <MdProductionQuantityLimits />,
        name: 'production facility',
        desc: 'We believe in continuously renovating and upgrading our equipment and tools to guarantee uninterrupted production levels and the efficient distribution of our products across the globe.'
    },
    {
        id: 3,
        icon: <TbCirclesRelation />,
        name: 'Relationship Managment',
        desc: 'The relationships developed with our customers have contributed greatly to our current success; the preservation of such solid relationships is the key to our future grouth.'
    },
    {
        id: 4,
        icon: <SiSalesforce />,
        name: 'Sales',
        desc: 'The continuous growth of our sales in various new locations is an outcome of our integral Safra services and dedication to satisfying our customers needs.'
    }, 
]

const Features = () => {

    return (
        <div id='features' className="flex justify-center items-center text-center mb-12 bg-gray-50">
            <div className="py-12 space-y-12">
                <div className='flex flex-wrap m-auto w-full justify-center items-center '>
                    {features.map(feature=> {
                            return (
                                <div key={feature.id} >
                                    <div className='flex flex-col cursor-grab justify-center items-center mb-8 space-y-4 hover:bg-[rgba(0,0,0,.015)] group rounded-3xl duration-200 transition p-6'>
                                        <div className="text-5xl text-teal-600 bg-[rgba(0,0,0,.015)] rounded-full p-4 group-hover:bg-[rgba(0,0,0,.0)] group-hover:animate-spin">
                                            {feature.icon}
                                        </div>
                                        <h1 className='font-black text-teal-700 capitalize md:w-64'>
                                            {feature.name}
                                        </h1>
                                        <p className='md:w-64 text-sm pb-4'>
                                            {feature.desc}
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