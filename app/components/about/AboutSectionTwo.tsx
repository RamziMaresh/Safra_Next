import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-slate-100 dark:bg-gray-dark">
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
                  Safra Vision
                </h3>
                <p className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  To be a multi-region market leader providing environmentally acceptable quality solvents and chemicals
                  and the services thereof, globally to various end users.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 mt-6 tracking-wider text-2xl !leading-tight text-black dark:text-white sm:text-4xl md:text-[30px]">
                  Safra Mission
                </h3>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Meeting market requirements by providing value added products and services to all our
                  customers globally so they can contribute positively towards end consumers’ lifestyle.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Introducing Safe, effective and environment-friendly products that satisfy
                  a wide spectrum of market segments and consumer needs.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Sustain excellence in all that we do and provide added value to all our stakeholders
                  resulting in double-digit growth and investor security of future.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Create and maintain a culture committed to excellence and learning to attract and grow our intellectual
                  capital by empowering and equitably rewarding key players.
                </li>
                <li className="text-base text-justify leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Creating a work culture that puts our employees as our biggest asset helping provide a promising future.
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
