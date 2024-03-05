import Image from "next/image";

const SolutionsFor = () => {
  return (
    <section
      id="solutions"
      className="relative z-10 overflow-hidden pt-28 lg:pt-[150px] dark:bg-gray-dark"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-6 lg:w-1/2 hidden lg:block">
            <div className="relative mx-auto mb-12 aspect-[25/24] max-w-[400px] text-center lg:m-0"
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

        </div>
      </div>
    </section>
  );
};

export default SolutionsFor;
