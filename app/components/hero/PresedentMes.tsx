import Image from "next/image";
import SectionTitle from "../common/SectionTitle";


const HomeSecThree = () => {

    return (
        <section
            id="homeTwo"
            className="relative z-10 overflow-hidden lg:pt-[50px] dark:bg-gray-dark pt-8"
        >
  <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="rgb(20 184 166)" />
              <stop offset="1" stopColor="rgb(20 184 166)" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="rgb(20 184 166)" />
              <stop offset="1" stopColor="rgb(20 184 166)" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
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
