import Image from "next/image";
import SectionTitle from "../..//common/SectionTitle";


const ReProfileOne = () => {

    return (
        <>
            <section
                id="refinaryprofile"
                className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] dark:bg-gray-dark"
            >
                <div>
                    <span className="absolute left-0 top-0 z-[-1]">
                        <svg
                            width="287"
                            height="254"
                            viewBox="0 50 250 254"
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
                            viewBox="0 0 528 258"
                            fill="none"
                        //xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.3"
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
                                    title="Safra Refinary"
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
                                        src="/assets/refinarylight.png"
                                        alt="about-image"
                                        fill
                                        className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg"
                                    />
                                    <Image
                                        src="/assets/refinarydark.png"
                                        alt="about-image"
                                        fill
                                        className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <section
                id="refinaryProfileTwo"
                className="relative z-10 overflow-hidden pt-12 dark:bg-gray-dark bg-gray-100">
                <div className="container">
                    <div className="mb-12">
                        <div className="-mx-4 flex flex-wrap items-center">

                            <div className="w-full px-4 lg:w-1/2 ">
                                <div className="relative mx-auto aspect-[25/24] max-w-[400px] ml-0">
                                    <Image
                                        src="/assets/refinarylightTwo.png"
                                        alt="about-image"
                                        fill
                                        className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0 rounded-lg"
                                    />
                                    <Image
                                        src="/assets/refinaryDarkTwo.png"
                                        alt="about-image"
                                        fill
                                        className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0 rounded-lg"
                                    />
                                </div>
                            </div>

                            <div className="w-full px-6 lg:w-1/2">
                                <SectionTitle
                                    title=""
                                    paragraph="
                                    All the segments of refinery fulfill complete requirements of health and safety standards and in 1996  
                                    awarded ISO-9002 certification for sticking to total quality.
                                    The plant is equipped with necessary technological flexibility and pool of technical experts to produce innovative 
                                    tailor made products conforming to the customer specifications.
                                    The plant is very well equipped with high capacity solvent filling facility in drums and tankers for road 
                                    deliveries. It also has a pipeline linked to the sea-terminal facilitating excellent freight economics to 
                                    our esteemed customers owing to the efficient port facilities for shipment of products in large vessels, 
                                    ISO tanks and containers."
                                    paragraphTwo=""
                                    mb="44px"
                                />
                            </div>



                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default ReProfileOne;
