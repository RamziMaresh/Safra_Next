import Image from "next/image";
import SectionTitle from "../common/SectionTitle";


const HomeSecTwo = () => {

    return (
        <section
            id="homeTwo"
            className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] dark:bg-gray-dark">
            <div>
                <span className="absolute left-0 top-0 z-[-1]">
                    <svg
                        width="287"
                        height="254"
                        viewBox="0 0 287 254"
                        fill="none"
                    >
                        <path
                            opacity="0.2"
                            d="M286.5 0.5L-14.5 254.5V69.5L286.5 0.5Z"
                            fill="url(#paint0_linear_111:578)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_111:578"
                                x1="-40.5"
                                y1="117"
                                x2="301.926"
                                y2="-97.1485"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="rgb(45 212 191)" />
                                <stop offset="1" stopColor="rgb(94 234 212)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
                <span className="absolute right-0 top-0 z-[-1]">
                    <svg
                        width="628"
                        height="258"
                        viewBox="0 0 628 258"
                        fill="none"
                    //xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            opacity="0.3"
                            d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                            fill="url(#paint0_linear_0:1)"
                        />
                        <path
                            opacity="0.2"
                            d="M0.0716344 182.78L101.988 -15.0769L142.154 81.4093L0.0716344 182.78Z"
                            fill="url(#paint1_linear_0:1)"
                        />
                        <defs>
                            <linearGradient
                                id="paint0_linear_0:1"
                                x1="644"
                                y1="221"
                                x2="429.946"
                                y2="37.0429"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="rgb(45 212 191)" />
                                <stop offset="1" stopColor="rgb(94 234 212)" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_0:1"
                                x1="18.3648"
                                y1="166.016"
                                x2="105.377"
                                y2="32.3398"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="rgb(45 212 191)" />
                                <stop offset="1" stopColor="rgb(94 234 212)" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </span>
            </div>

            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-12">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-6 lg:w-1/2">
                            <SectionTitle
                                title="Who We Are !"
                                paragraph="Safra is the biggest company in the Middle East producing 
                                Aliphatic and Aromatic solvents, serving industries such as Paints, 
                                Adhesives, Insecticides & Pesticides, Thinner, Ink, printing, Tannery, 
                                Resins, Industrial Cleaning and Maintenance, Dry Cleaning, Spot Removing,
                                Wood Protection and varnishes, Construction Chemicals, 
                                Oil Fields Chemicals, Bitumen Based Products, etc. Safra has got privilege 
                                of producing odorless (aromatic free) solvents for various applications especially 
                                oil-drilling, aerosol insecticide, 
                                agricultural pesticide, industrial cleaning and maintenance."
                                paragraphTwo=""
                                mb="44px"
                            />
                        </div>

                        <div className="w-full px-4 lg:w-1/2">
                            <div className="relative mx-auto aspect-[25/24] max-w-[400px] lg:mr-0">
                                <Image
                                    src="/assets/about/about-image.svg"
                                    alt="about-image"
                                    fill
                                    className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                                />
                                <Image
                                    src="/assets/about/about-image-dark.svg"
                                    alt="about-image"
                                    fill
                                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSecTwo;
