import Image from "next/image";
import SectionTitle from "../common/SectionTitle";
import Slider from "../slider/slider";
import SliderHome from "./homeslider/SliderHome";


const HomeSecTwo = () => {

    return (
        <section
            id="homeTwo"
            className="relative z-10 overflow-hidden lg:pt-[50px] dark:bg-gray-dark ">

            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-1">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-6 lg:w-1/2">
                            <SectionTitle
                                title="Safra Co. Ltd."

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

                                paragraph="SAFRA is a manufacturer and distributor of hydrocarbon solvents having a
                                refinery located at Yanbu Industrial City on the west coast of Saudi Arabia, and corporate office at Jeddah. 
                                The company serves industries of paints,dhesives, insecticides & pesticides, thinner, alkyd resins, industrial
                                cleaning, maintenance solvents, dry cleaning, spot removing, wood protection, varnishes, construction chemicals, 
                                oil field chemicals, and Bitumen based products."
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
