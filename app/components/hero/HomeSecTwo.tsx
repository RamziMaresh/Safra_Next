import Image from "next/image";



const HomeSecTwo = () => {

    return (
        <section
            id="homeTwo"
            className="relative z-10 overflow-hidden lg:pt-[20px]">

            <div className="container">
                <div className="border-b border-body-color/[.15] pb-2 md:pb-20 lg:pb-2">

                    <div className="-mx-4 flex flex-wrap items-center">
                        <div className="w-full px-6 lg:w-3/4 mb-10">
                            <h2 className="mb-4 text-xl font-bold !leading-tight text-black sm:text-xl md:text-[20px]"> Discover Safra</h2>

                            <div className="mb-4">
                                <Image
                                    src=
                                    {"/assets/safralines.png"}
                                    width={350}
                                    height={400}
                                    alt="safra-colors-image-light"
                                    className=""
                                />
                            </div>
                            <p className="tracking-wider text-base !leading-relaxed text-body-color text-justify">
                                SAFRA is a manufacturer and distributor of hydrocarbon solvents having a
                                refinery located at Yanbu Industrial City on the west coast of Saudi Arabia, and corporate office at Jeddah.
                                The company serves industries of paints,dhesives, insecticides & pesticides, thinner, alkyd resins, industrial
                                cleaning, maintenance solvents, dry cleaning, spot removing, wood protection, varnishes, construction chemicals,
                                oil field chemicals, and Bitumen based products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeSecTwo;
