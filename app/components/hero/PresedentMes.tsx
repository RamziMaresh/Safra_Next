import Image from "next/image";
import SectionTitle from "../common/SectionTitle";


const HomeSecThree = () => {

    return (
        <section
            id="homeTwo"
            className="relative z-10 overflow-hidden lg:pt-[50px] dark:bg-gray-dark pt-8">
                                <div>
                    <span className="absolute left-0 top-0 z-[-1]">
                        <svg
                            width="287"
                            height="254"
                            viewBox="0 0 287 254"
                            fill="none"
                        >
                            <path
                                opacity="0.1"
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

                        >
                            <path
                                opacity="0.1"
                                d="M669.125 257.002L345.875 31.9983L524.571 -15.8832L669.125 257.002Z"
                                fill="url(#paint0_linear_0:1)"
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
                            </defs>
                        </svg>
                    </span>
                </div>

            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-12">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-6 lg:w-1/2 hidden lg:block">
                            <div
                                className="relative mx-auto mb-12 aspect-[25/24] max-w-[400px] text-center lg:m-0"
                                data-wow-delay=".15s"
                            >
                                <Image
                                    src="/assets/about/about-image-2.svg"
                                    alt="about image"
                                    fill
                                    className="drop-shadow-three dark:hidden dark:drop-shadow-none"
                                />
                                <Image
                                    src="/assets/about/about-image-2-dark.svg"
                                    alt="about image"
                                    fill
                                    className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
                                />
                            </div>
                        </div>
                        <div className="w-full px-6 lg:w-1/2">
                            <SectionTitle
                                title="President Message  "
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



                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSecThree;
