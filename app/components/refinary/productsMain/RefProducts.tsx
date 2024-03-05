"use client";

import { useState } from "react";
import Image from "next/image";
import { Metadata } from "next";
//
import Aliphatic from "../products/Aliphatic";
import Aromatic from "../products/Aromatic";
import TagButton from "../../products/TagButton";

export const metadata: Metadata = {
    title: "Blog Details Page | Free Next.js Template for Startup and SaaS",
    description: "This is Blog Details Page for Startup Nextjs Template",
    // other metadata
};

const ReProducts = () => {
    const [aliphatic, setAliphatic] = useState(true);
    const [aromatic, setAromatic] = useState(false);
    //
    const aliphaticHandler = () => {
        setAliphatic(true);
        setAromatic(false);
    };
    const aromaticHandler = () => {
        setAliphatic(false);
        setAromatic(true);
    };

    return (
        <>
            <section
                id="refinary-products-page"
                className="pb-[120px] pt-[150px] dark:bg-gray-dark"
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

                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-2 text-3xl tracking-wide font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                    Refinary Products Page |
                                </h2>
                                <div className="flex flex-wrap items-center justify-between">
                                    <div className="flex flex-wrap items-center">
                                        <div className="mb-5 flex items-center">
                                            <p className="mr-5 flex items-center text-yellow-700 dark:text-yellow-500 italic text-base font-medium text-body-color">
                                                Solutions For Better Living Science 1990
                                            </p>
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <a
                                            href="/"
                                            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-teal-500 to-teal-800 px-4 py-2 text-sm tracking-wide text-white"
                                        >
                                            Refinary Profile Page
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

                                <div>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        Duis aute irure dolor in reprehenderit in voluptate velit
                                        esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat.
                                    </p>
                                    <div className="mb-10 w-full overflow-hidden rounded">
                                        <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                                            <Image
                                                src="/assets/refinary/main.png"
                                                alt="image"
                                                fill
                                                className="object-cover object-center"
                                            />
                                            <Image
                                                src="/assets/refinary/mainDark.png"
                                                alt="image"
                                                fill
                                                className="h-full w-full object-cover object-center hidden drop-shadow-three dark:block dark:drop-shadow-none"
                                            />
                                        </div>
                                    </div>

                                    <div className="py-4 p-2rounded-md mb-6">
                                        <button onClick={aliphaticHandler} className="dark:bg-teal-600 mr-2 tracking-wide bg-gray-200 p-1 rounded-md px-2 active:bg-blue-500">
                                            Aliphatic Solvents
                                        </button>
                                        <button onClick={aromaticHandler} className="dark:bg-teal-600 tracking-wide bg-gray-100 p-1 rounded-md px-2 active:bg-blue-500">
                                            Aromatic Solvents
                                        </button>
                                    </div>

                                    <div className="">
                                        {aliphatic && (
                                            <div>
                                                <Aliphatic />
                                            </div>
                                        )}
                                        {aromatic && (
                                            <div>
                                                <Aromatic />
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
                                        <p className="text-center text-base font-medium italic text-body-color">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod incididunt utionals labore et dolore magna
                                            aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                                            etiam sit amet.
                                        </p>
                                    </div>
                                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                        consectetur adipiscing elit in voluptate velit esse cillum
                                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                        mattis vulputate cupidatat.
                                    </p>
                                    <div className="items-center justify-between sm:flex">
                                        <div className="mb-5">
                                            <h4 className="mb-3 text-sm font-medium text-body-color">
                                                Other Links:
                                            </h4>


                                            <div className="flex items-center">
                                                <TagButton text="Contact Info" />
                                                <TagButton text="SPP Products" />
                                                <TagButton text="Marketing & Sales" />
                                                <TagButton text="News & Media" />
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
};

export default ReProducts;
