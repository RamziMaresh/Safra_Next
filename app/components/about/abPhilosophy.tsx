import Image from "next/image";

const AbuPhilosophy = () => {
  return (
    <section className="py-16 md:py-20 lg:py-12">
      <div className="container">
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
          <div className="w-full px-6 lg:w-1/2 tracking-wide">
            <div className="max-w-[470px]">

              <div className="mb-9">
                <h3 className="mb-4 mt-6 tracking-wider text-2xl !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px]">
                  Business Philosophy
                </h3>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Proactively deal with all our partners with confidence and pride in a spirit of mutual respect, trust and
                  openness maintaining highest standards of integrity.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Think of safety and act safely at all the times in all our endeavors.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Improve customer focus through better understanding and anticipating of the priorities of
                  existing and emerging customers.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Serve our customers with accuracy, speed, flexibility, efficiency and effectiveness-based on agreed priorities.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Introduce innovative quality products and services at competitive cost leading to added economic benefits to all the stakeholders.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Be responsible and active corporate player respecting communities and environments in which we operate.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbuPhilosophy;
