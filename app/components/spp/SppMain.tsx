
import Link from "next/link";
import RelatedPost from "../products/RelatedPost";
import TagButton from "../products/TagButton";
import Image from "next/image";
import {
    Collapse,
    Dropdown,
    Ripple,
    Carousel,
    initTWE
} from 'tw-elements';

initTWE({ Collapse, Dropdown, Ripple, Carousel });


const Spp = () => {
    return (
        <>
            <section
                id="refinary"
                className="pb-[120px] pt-[180px] relative z-10 overflow-hidden  dark:bg-gray-dark"
            >
                <div>
                    <span className="absolute left-0 top-0 z-[-1]">
                        <svg
                            width="287"
                            height="254"
                            viewBox="0 0 287 254"
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
                            viewBox="0 0 628 258"
                            fill="none"

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

                {/** */}
                <div className="container">
                    <div className="-mx-4 flex flex-wrap ">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h1 className="mb-2 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight tracking-wide">
                                    Safra Packaged Products (SPP)
                                </h1>
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="flex flex-wrap items-center">
                                        <div className="mb-2 flex items-center">
                                            <p className="mr-5 dark:text-yellow-500 flex items-center text-base italic font-medium text-body-color tracking-wide text-yellow-700 dark:text-white">
                                                Add More Quality Into Your Life
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mb-2">
                                        <a
                                            href="#0"
                                            className="tracking-wide inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-teal-500 to-teal-800 px-4 py-1 text-sm text-white"
                                        >
                                            Contact SPP Department !
                                        </a>
                                    </div>

                                    <div className="mb-8">
                                        <Image
                                            src=
                                            {"/assets/safralines.png"}
                                            width={500}
                                            height={500}
                                            alt="safra-colors-image-light"
                                            className="dark:hidden "
                                        />

                                        <Image
                                            src="/assets/safralinesdark.png"
                                            alt="safra-colors-image-dark"
                                            width={500}
                                            height={500}
                                            className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                                        />
                                    </div>


                                    
                                           </div>


                                {/** */}
                                <div>
                                    <p className="tracking-wide text-justify mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Beside its main activity of producing aliphatic and aromatic hydrocarbon solvents in Yanbu,
                                        Safra has its packaged products facility SPP ( Safra Packaged Products) established in Jeddah since 1996.
                                        SPP is engaged in producing various
                                        high quality blended products for the household, paint industry and at large for the general purpose.
                                    </p>
                                    <p className="tracking-wide text-justify mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        The present capacity of the SPP Plant is not only more than enough for the existing product line but can
                                        further accommodate many new products that are in development stage.
                                        Research & Development activity is the core function of SPP & any new product needed by local as well as regional markets
                                        becomes the subject of development until it reaches the satisfaction of the customers.
                                    </p>

                                    <p className="tracking-wide text-justify mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        To provide best and consistent quality products, up to date high-tech semi-automatic machines
                                        are utilized for production & filling of various products in operation.
                                    </p>
                                    <div className="mb-10 w-full overflow-hidden rounded-lg">
                                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                            <Image
                                                src="/assets/about/sppProfile.png"
                                                alt="image"
                                                fill
                                                className="h-full w-full object-cover object-center  dark:hidden dark:drop-shadow-none"
                                            />
                                            <Image
                                                src="/assets/about/sppProfileDark.png"
                                                alt="image"
                                                fill
                                                className="h-full w-full object-cover object-center hidden drop-shadow-three dark:block dark:drop-shadow-none"
                                            />
                                        </div>
                                    </div>


                                    <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        A- Safra Pine™ (Normal Paint Thinner)
                                    </h3>
                                    <p className="mb-8 text-base font-medium text-body-color text-yellow-800 dark:text-yellow-500">
                                        PDF Download: <Link target="_blank" href="/assets/PDF Files/Spp/Specs/Safra Pine.pdf">Specs</Link> &
                                        <Link target="_blank" href="/assets/PDF Files/Spp/Msds/Safra Pine.pdf"> Msds</Link>
                                    </p>
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
                                                    Minimizes health hazards caused by vapors with irritating smell.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Improves paint properties not obtained with conventional thinners such as gloss, flow, durability etc.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Reduces ventilation requirements unlike when ordinary paint thinners are used.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Completely lead free. Therefore, safe without danger of blood cancer, asthma & chest disease.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Aesthetically very much acceptable compared to other available products.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>


                                    <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        B- Safra Pure™ (Odorless Paint Thinner)
                                    </h3>
                                    <p className="mb-8 text-base font-medium text-yellow-800 text-body-color dark:text-yellow-500">
                                        PDF Download: <Link target="_blank" href="/assets/PDF Files/Spp/Specs/Safra Pure.pdf">Specs</Link> &
                                        <Link target="_blank" href="/assets/PDF Files/Spp/Msds/Safra Pure.pdf"> Msds</Link>
                                    </p>
                                    <div className="grid-container grid grid-cols-5 mb-10">
                                        <div className="relative item2 col-span-2 w-2/3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-md hidden lg:block">
                                            <Image
                                                src="/assets/spp/pure.gif"
                                                alt="image"
                                                fill
                                                className="h-auto w-1/2 object-contain object-center p-6"
                                            />
                                        </div>
                                        <div className="item1 col-span-3">
                                            <ul className="list-inside list-disc text-body-color">
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Minimizes health hazards caused by vapors with irritating smell/odor.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Improves paint properties not obtained with other thinners or Kerosene, such as gloss, flow, durability etc.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Reduces ventilation requirements to minimum unlike when ordinary paint thinners or Kerosene are used.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        C- Safra Cryl™ (Lacquer Thinner)
                                    </h3>
                                    <p className="mb-8 text-base font-medium text-yellow-800 text-body-color dark:text-yellow-500">
                                        PDF Download: <Link target="_blank" href="/assets/PDF Files/Spp/Specs/Safra Cryl.pdf">Specs</Link> &
                                        <Link target="_blank" href="/assets/PDF Files/Spp/Msds/Safra Cryl.pdf"> Msds</Link>
                                    </p>
                                    <div className="grid-container grid grid-cols-5 mb-10">
                                        <div className="relative item2 col-span-2 w-2/3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-md hidden lg:block">
                                            <Image
                                                src="/assets/spp/cryl.gif"
                                                alt="image"
                                                fill
                                                className="h-auto w-1/2 object-contain object-center p-6"
                                            />
                                        </div>
                                        <div className="item1 col-span-3">
                                            <ul className="list-inside list-disc text-body-color">
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Quickly reduces the consistency of the lacquers to the required degree.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Improves film smoothness of the lacquers when applied either by spray or dipping.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Film of lacquer dries without blushing, pin holing and other surface defects.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Due to splitting capabilities effectively cleans all metallic surfaces by dissolving adhered oil, grease, wax, etc.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Helps drying lacquers quicker than when they are dissolved in conventional paint thinner.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        D- Safra Prime™ (Acrylic Thinner)
                                    </h3>
                                    <p className="mb-8 text-base font-medium text-yellow-800 text-body-color dark:text-yellow-500">
                                        PDF Download: <Link target="_blank" href="/assets/PDF Files/Spp/Specs/Safra Prime.pdf">Specs</Link> &
                                        <Link target="_blank" href="/assets/PDF Files/Spp/Msds/Safra Prime.pdf"> Msds</Link>
                                    </p>
                                    <div className="grid-container grid grid-cols-5 mb-10">
                                        <div className="relative item2 col-span-2 w-2/3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-md hidden lg:block">
                                            <Image
                                                src="/assets/spp/prime.gif"
                                                alt="image"
                                                fill
                                                className="h-auto w-1/2 object-contain object-center p-6"
                                            />
                                        </div>
                                        <div className="item1 col-span-3">
                                            <ul className="list-inside list-disc text-body-color">
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Quickly reduces the consistency of the automotive lacquers to the required degree.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Improves film smoothness of the automotive lacquers when applied either by spray or dipping thus extending excellent finish.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Film of automotive lacquer dries without blushing, resin blush, pin holing and other surface defects.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    No [orange peel] is developed after the evaporation of Safra Prime™, and therefore increases the tensile strength of the film along with its gloss.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        E- Safra Pro™ (Slow Dryness)
                                    </h3>
                                    <p className="mb-8 text-base font-medium text-yellow-800 text-body-color dark:text-yellow-500">
                                        PDF Download: <Link target="_blank" href="/assets/PDF Files/Spp/Specs/Safra Pro.pdf">Specs</Link> &
                                        <Link target="_blank" href="/assets/PDF Files/Spp/Msds/Safra Pro.pdf"> Msds</Link>
                                    </p>
                                    <div className="grid-container grid grid-cols-5 mb-10">
                                        <div className="relative item2 col-span-2 w-2/3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-md hidden lg:block">
                                            <Image
                                                src="/assets/spp/prime.gif"
                                                alt="image"
                                                fill
                                                className="h-auto w-1/2 object-contain object-center p-6"
                                            />
                                        </div>
                                        <div className="item1 col-span-3">
                                            <ul className="list-inside list-disc text-body-color">
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Quickly reduces the consistency of the automotive lacquers to the required degree.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Improves film smoothness of the automotive lacquers when applied either by spray or dipping thus extending excellent finish.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Film of diluted automotive lacquer dries without blushing, resin blush, pinholing and other surface defects.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    No [orange peel] effect is developed after the evaporation of Safra Pro TM Thinner, and therefore increases the tensile strength of the film alongwith its gloss.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Additional quantity of retarder present in Safra Pro ™ results in very durable lacquer films.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        F- Safra Shine™
                                    </h3>
                                    <p className="mb-8 text-base font-medium text-yellow-800 text-body-color dark:text-yellow-500">
                                        PDF Download: <Link target="_blank" href="/assets/PDF Files/Spp/Specs/Safra Shine.pdf">Specs</Link> &
                                        <Link target="_blank" href="/assets/PDF Files/Spp/Msds/Safra Shine.pdf"> Msds</Link>
                                    </p>
                                    <div className="grid-container grid grid-cols-5 mb-10">
                                        <div className="relative item2 col-span-2 w-2/3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-md hidden lg:block">
                                            <Image
                                                src="/assets/spp/shine.gif"
                                                alt="image"
                                                fill
                                                className="h-auto w-1/2 object-contain object-center p-6"
                                            />
                                        </div>
                                        <div className="item1 col-span-3">
                                            <ul className="list-inside list-disc text-body-color">
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Transparent as well as available in different colors.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Gives Surfaces distinguished shining look.                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Controls water vapor diffusion.                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Prevents mold growth.                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Weather resistant.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Contains no lead in any form.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        G- Safra Bond™ (Cement)
                                    </h3>
                                    <p className="mb-8 text-base font-medium text-yellow-800 text-body-color dark:text-yellow-500">
                                        PDF Download: <Link target="_blank" href="/assets/PDF Files/Spp/Specs/Safra Bond.pdf">Specs</Link> &
                                        <Link target="_blank" href="/assets/PDF Files/Spp/Msds/Safra Bond.pdf"> Msds</Link>
                                    </p>
                                    <div className="grid-container grid grid-cols-5 mb-10">
                                        <div className="relative item2 col-span-2 w-2/3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-md hidden lg:block">
                                            <Image
                                                src="/assets/spp/bond.gif"
                                                alt="image"
                                                fill
                                                className="h-auto w-1/2 object-contain object-center p-6"
                                            />
                                        </div>
                                        <div className="item1 col-span-3">
                                            <ul className="list-inside list-disc text-body-color">
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Emits less VOCc than many conventional products.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Fast evaporating than other products to dry faster.                                         </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Work with both cold & hot water.                                             </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Can be used for household & industry as well.                                          </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Stable between 40°F & 110°F at storage.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Provide shelf life of 3 years.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    <h3 className="font-xl mb-2 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                                        H- Safra Bond™ (Cleaner)
                                    </h3>
                                    <p className="mb-8 text-base font-medium text-yellow-800 text-body-color dark:text-yellow-500">
                                        PDF Download: <Link target="_blank" href="/assets/PDF Files/Spp/Specs/Safra Bond Cleaner.pdf">Specs</Link> &
                                        <Link target="_blank" href="/assets/PDF Files/Spp/Msds/Safra Bond Cleaner.pdf"> Msds</Link>
                                    </p>
                                    <div className="grid-container grid grid-cols-5 mb-10">
                                        <div className="relative item2 col-span-2 w-2/3 bg-gradient-to-r from-teal-600 to-teal-800 rounded-md hidden lg:block">
                                            <Image
                                                src="/assets/spp/bond-c.gif"
                                                alt="image"
                                                fill
                                                className="h-auto w-1/2 object-contain object-center p-6"
                                            />
                                        </div>
                                        <div className="item1 col-span-3">
                                            <ul className="list-inside list-disc text-body-color">
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Fast affective on plastic surfaces.
                                                </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Does not react with container surface.                                              </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Evaporates fast without any blushing.                                            </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Cleans the surface taking all extraneous material.                                              </li>
                                                <li className="mb-1 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                                                    Long shelf life storage up to 3 years if kept under shed.
                                                </li>

                                            </ul>
                                        </div>
                                    </div>



                                    <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-gray-100 p-8 md:p-9 lg:p-8 xl:p-9">
                                        <p className="text-center text-base font-medium italic text-body-color">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod incididunt utionals labore et dolore magna
                                            aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                                            etiam sit amet.
                                        </p>
                                    </div>
                                    {/**
                                    <div className="items-center justify-between sm:flex">
                                        <div className="mb-5">
                                            <h4 className="mb-3 text-sm font-medium text-body-color">
                                                Popular Tags :
                                            </h4>
                                            <div className="flex items-center">
                                                <TagButton text="Careers" />
                                                <TagButton text="Contact Info" />
                                                <TagButton text="Marketing & Salse" />
                                            </div>
                                        </div>
                                    </div>
 */}
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-4/12">
                            <div className="shadow-three dark:bg-gray-dark mb-10 mt-12 rounded-sm bg-white p-6 dark:shadow-none lg:mt-0">
                                <div className="flex items-center justify-between">
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="border-stroke dark:text-body-color-dark dark:shadow-two mr-4 w-full rounded-lg border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                                    />
                                    <button
                                        aria-label="search button"
                                        className="flex h-[50px] w-full max-w-[50px] items-center justify-center rounded-lg bg-primary text-white"
                                    >
                                        <svg
                                            width="20"
                                            height="18"
                                            viewBox="0 0 20 18"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.4062 16.8125L13.9375 12.375C14.9375 11.0625 15.5 9.46875 15.5 7.78125C15.5 5.75 14.7188 3.875 13.2812 2.4375C10.3438 -0.5 5.5625 -0.5 2.59375 2.4375C1.1875 3.84375 0.40625 5.75 0.40625 7.75C0.40625 9.78125 1.1875 11.6562 2.625 13.0937C4.09375 14.5625 6.03125 15.3125 7.96875 15.3125C9.875 15.3125 11.75 14.5938 13.2188 13.1875L18.75 17.6562C18.8438 17.75 18.9688 17.7812 19.0938 17.7812C19.25 17.7812 19.4062 17.7188 19.5312 17.5938C19.6875 17.3438 19.6562 17 19.4062 16.8125ZM3.375 12.3438C2.15625 11.125 1.5 9.5 1.5 7.75C1.5 6 2.15625 4.40625 3.40625 3.1875C4.65625 1.9375 6.3125 1.3125 7.96875 1.3125C9.625 1.3125 11.2812 1.9375 12.5312 3.1875C13.75 4.40625 14.4375 6.03125 14.4375 7.75C14.4375 9.46875 13.7188 11.125 12.5 12.3438C10 14.8438 5.90625 14.8438 3.375 12.3438Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-lg bg-gray-100 dark:shadow-none rounded-lg">
                                <h3 className="border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                                    News And Media
                                </h3>
                                <ul className="p-8">
                                    <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                                        <RelatedPost
                                            title="Best Industry In the chemical industries 1414/1993"
                                            image="/assets/news/newsonelight.png"
                                            slug="#"
                                            date="12 Feb 2025"
                                        />
                                    </li>
                                    <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10 ">
                                        <RelatedPost
                                            title="What is Aliphatic & Aromatic Solvents Products?"
                                            image="/assets/news/newstwolight.png"
                                            slug="#"
                                            date="15 Feb, 2024"
                                        />
                                    </li>
                                    <li>
                                        <RelatedPost
                                            title="Read About Safra History"
                                            image="/assets/news/newsthreelight.png"
                                            slug="#"
                                            date="05 Jun, 2024"
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                                <h3 className="tracking-wider border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                                    Related Links |
                                </h3>
                                <div className="flex flex-wrap px-8 py-6 ">
                                    <TagButton text="Aliphatic & Aromatic Solvents" />
                                    <TagButton text="News And Media" />
                                    <TagButton text="Marketing And Sales" />
                                    <TagButton text="" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Spp;
