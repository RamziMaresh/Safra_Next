import Image from "next/image";
import SectionTitle from "../common/SectionTitle";


const AboutSectionThree = () => {

    return (
        <section
            className="dark:bg-gray-dark lg:pt-[50px]">

            <div className="container">
                <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-12">
                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-6 lg:w-1/2">
                            <SectionTitle
                                title="Safra Refinary"
                                paragraph="Safra established its fully automated plant at Yanbu, Saudi Arabia on the Red sea coast. 
                                It is the biggest and most modern hydrocarbon plant in the Middle East producing Aliphatic 
                                and Aromatic solvents with huge storage capacities making ready availability of the products.
                                The production capacity of Safra refinery is continuously expanding to meet increasing demand 
                                for products while keeping pace with the latest technological developments and simultaneously meeting 
                                stringent International standards for manufacturing solvents. 
                                "
                                
                                paragraphTwo="All the segments of refinery fulfill complete requirements of health and safety standards and in 1996 
                                awarded ISO-9002 certification for sticking to total quality.
                                The plant is equipped with necessary technological flexibility and pool of technical experts to produce innovative 
                                tailor made products conforming to the customer specifications.
                                The plant is very well equipped with high capacity solvent filling facility in drums and tankers for road deliveries. 
                                It also has a pipeline linked to the sea-terminal facilitating excellent freight economics
                                to our esteemed customers owing to the efficient port facilities for shipment of products in large vessels, 
                                ISO tanks and containers.
                                "
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

export default AboutSectionThree;
