import Image from "next/image";

const Aromatic = () => {
  return (
    <>

      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full">
            <div>
              <h3 className="font-xl mb-12 text-yellow-700 tracking-wider font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                Aromatic Solvents Products
              </h3>
              <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                1- Safranorm™ (Aliphatic Solvent with 20% Vol.)
              </h3>
              <p className="mb-8 text-base font-medium italic text-body-color">PDF Download: Specs and MSDS </p>
              <div className="grid-container grid grid-cols-5 mb-10">
                <div className="relative item2 col-span-2 w-2/3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-md hidden lg:block">
                  <Image
                    src="/assets/spp/pine.gif"
                    alt="image"
                    fill
                    className="h-auto w-1/2 object-contain object-center p-6"
                  />
                </div>


                <div className="item1 col-span-3">
                  <ul className="list-inside list-disc text-body-color">
                    <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Optimum Solution viscosities for long-oil alkyd resins & varnishes.
                    </li>
                    <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Good cleaning of tar spots. Excellent for care care, Polishes and Waxes.
                    </li>
                    <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Milder Odor.
                    </li>
                    <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      More refined than kerosene.
                    </li>
                    <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                      Good cleaning power for metal and equipment degreasing and preserve wood.
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Aromatic