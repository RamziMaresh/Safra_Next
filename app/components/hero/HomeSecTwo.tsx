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
