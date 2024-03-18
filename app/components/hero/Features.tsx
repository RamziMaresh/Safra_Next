import { HiBadgeCheck } from 'react-icons/hi';
import { TbCirclesRelation } from "react-icons/tb";
import { SiSalesforce } from "react-icons/si";
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

        <section
            id='features'
            className="relative z-10 overflow-hidden  flex justify-center items-center text-center mb-12 bg-slate-50 dark:bg-gray-dark"
        >

            <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
                <svg
                    width="450"
                    height="556"
                    viewBox="0 0 450 556"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >

                    <circle
                        opacity="0.8"
                        cx="184.521"
                        cy="315.521"
                        r="132.862"
                        transform="rotate(114.874 184.521 315.521)"
                        stroke="url(#paint4_linear_25:217)"
                    />
                    <circle
                        opacity="0.8"
                        cx="356"
                        cy="290"
                        r="179.5"
                        transform="rotate(-30 356 290)"
                        stroke="url(#paint5_linear_25:217)"
                    />

                    <defs>

                        <linearGradient
                            id="paint4_linear_25:217"
                            x1="184.521"
                            y1="182.159"
                            x2="184.521"
                            y2="448.882"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="rgb(20 184 166)" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>
                        <linearGradient
                            id="paint5_linear_25:217"
                            x1="356"
                            y1="110"
                            x2="356"
                            y2="470"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="rgb(20 184 166)" />
                            <stop offset="1" stopColor="white" stopOpacity="0" />
                        </linearGradient>

                    </defs>
                </svg>
            </div>
            <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
                <svg
                    width="364"
                    height="201"
                    viewBox="0 0 364 201"
                    fill="none"
                >
                    <path
                        d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
                        stroke="url(#paint0_linear_25:218)"
                    />
                    <path
                        d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
                        stroke="url(#paint1_linear_25:218)"
                    />
                    <path
                        d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
                        stroke="url(#paint2_linear_25:218)"
                    />
                    <path
                        d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
                        stroke="url(#paint3_linear_25:218)"
                    />
                    <circle
                        opacity="0.8"
                        cx="214.505"
                        cy="60.5054"
                        r="49.7205"
                        transform="rotate(-13.421 214.505 60.5054)"
                        stroke="url(#paint4_linear_25:218)"
                    />
                    <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
                    <defs>
                        <linearGradient
                            id="paint0_linear_25:218"
                            x1="184.389"
                            y1="69.2405"
                            x2="184.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" stopOpacity="0" />
                            <stop offset="1" stopColor="#4A6CF7" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_25:218"
                            x1="156.389"
                            y1="69.2405"
                            x2="156.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" stopOpacity="0" />
                            <stop offset="1" stopColor="#4A6CF7" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_25:218"
                            x1="125.389"
                            y1="69.2405"
                            x2="125.389"
                            y2="212.24"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" stopOpacity="0" />
                            <stop offset="1" stopColor="#4A6CF7" />
                        </linearGradient>
                        <linearGradient
                            id="paint3_linear_25:218"
                            x1="93.8507"
                            y1="67.2674"
                            x2="89.9278"
                            y2="210.214"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" stopOpacity="0" />
                            <stop offset="1" stopColor="#4A6CF7" />
                        </linearGradient>
                        <linearGradient
                            id="paint4_linear_25:218"
                            x1="214.505"
                            y1="10.2849"
                            x2="212.684"
                            y2="99.5816"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4A6CF7" />
                            <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                        </linearGradient>
                        <radialGradient
                            id="paint5_radial_25:218"
                            cx="0"
                            cy="0"
                            r="1"
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="translate(220 63) rotate(90) scale(43)"
                        >
                            <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                            <stop offset="1" stopColor="white" stopOpacity="0.08" />
                        </radialGradient>
                    </defs>
                </svg>
            </div>


            <div className="py-12 space-y-12">
                <div className="px-14 pt-12 space-y-12 pb-4 text-center ">
                    <h2 className="text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[35px] tracking-wide capitalize">
                        Total Quality Managment
                    </h2>
                </div>
                <div className='flex flex-wrap m-auto w-full justify-center items-center '>
                    {features.map(feature => {
                        return (
                            <div key={feature.id} >
                                <div className='flex flex-col cursor-grab justify-center items-center mb-8 space-y-4 hover:bg-[rgba(0,0,0,.015)] group rounded-3xl duration-200 transition p-6'>
                                    <div className="text-5xl text-teal-600 dark:text-white bg-[rgba(0,0,0,.015)] rounded-full p-4 group-hover:bg-[rgba(0,0,0,.0)] group-hover:animate-spin">
                                        {feature.icon}
                                    </div>
                                    <h1 className='font-black text-teal-700 dark:text-white capitalize md:w-64'>
                                        {feature.name}
                                    </h1>
                                    <p className='md:w-64 text-sm pb-4'>
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Features