import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Slider from "../slider/slider";
import SliderHome from "./homeslider/SliderHome";


const HomeSecTwo = () => {

    return (
        <section
            id="homeTwo"
            className="relative z-10 overflow-hidden lg:pt-[50px] dark:bg-gray-dark ">
            <div>
                <span className="absolute right-0 top-0 z-[-1]">
                    <svg
                        width="628"
                        height="258"
                        viewBox="0 0 628 258"
                        fill="none"

                    >
                        <path
                            opacity="0.2"
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
                        <div className="w-full px-6 lg:w-1/2">
                            <SectionTitle
                                title="Who We Are !"

                                paragraph=""
                                paragraphTwo=""
                                mb="20px"
                            />

                            <div className="mb-4">
                                <Image
                                    src=
                                    {"/assets/safralines.png"}
                                    width={350}
                                    height={400}
                                    alt="safra-colors-image-light"
                                    className="dark:hidden "
                                />

                                <Image
                                    src="/assets/safralinesdark.png"
                                    alt="safra-colors-image-dark"
                                    width={350}
                                    height={400}
                                    className="hidden  dark:block "
                                />
                            </div>

                            <SectionTitle
                                title=""

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
                            <SliderHome />

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSecTwo;
