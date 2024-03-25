import Image from "next/image";
import SectionTitle from "../common/SectionTitle";


const AboutSectionThree = () => {

    return (
        <section
            className="lg:pt-5 bg-slate-50 pt-5 pb-5">

            <div className="container">
                <div className="border-b border-body-color/[.15]  md:pb-20 lg:pb-5">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-6 lg:w-1/2">
                            <SectionTitle
                                title="President Message                                "
                                paragraph="Safra established its fully automated plant at Yanbu, Saudi Arabia on the Red sea coast. 
                                It is the biggest and most modern hydrocarbon plant in the Middle East producing Aliphatic 
                                and Aromatic solvents with huge storage capacities making ready availability of the products.
                                The production capacity of Safra refinery is continuously expanding to meet increasing demand 
                                for products while keeping pace with the latest technological developments and simultaneously meeting 
                                stringent International standards for manufacturing solvents. 
                                "

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
                                    className="mx-auto max-w-full drop-shadow-three  lg:mr-0 rounded-lg"
                                />
 
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSectionThree;
