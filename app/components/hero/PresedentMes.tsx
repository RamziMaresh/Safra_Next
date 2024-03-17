import Image from "next/image";
import SectionTitle from "../common/SectionTitle";


const HomeSecThree = () => {

    return (
        <section
            id="homeTwo"
            className="relative z-10 overflow-hidden lg:pt-[50px] dark:bg-gray-dark pt-8"
        >

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
