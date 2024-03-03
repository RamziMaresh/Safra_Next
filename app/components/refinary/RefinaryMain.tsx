"use client";

import RelatedPost from "../products/RelatedPost";
import TagButton from "../products/TagButton";
import Image from "next/image";
import { useState } from "react";
//
import Aliphatic from "./products/Aliphatic";
import Aromatic from "./products/Aromatic";

const RefinaryMain = () => {
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
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h1 className="mb-4 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight">
                                    Refinary Products |
                                </h1>
                                <div className="mb-10 flex flex-wrap items-center justify-between border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
              </div>
                                {/*** */}

                                <p className="tracking-wide text-justify mb-2 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                                    The Refinary Products are divided into two main types <b>Aliphatic</b> & <b>Aromatic</b> Solvents.
                                </p>
                                <div>
                                    <div className="py-4 p-2rounded-md mb-6">
                                        <button onClick={aliphaticHandler} className="dark:bg-teal-600 mr-2 tracking-wide bg-gray-100 p-1 rounded-md px-2 active:bg-blue-500">
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


                                    <div className="items-center justify-between sm:flex">
                                        <div className="mb-5">
                                            <h4 className="mb-3 text-sm font-medium text-body-color">
                                                Popular Tags :
                                            </h4>
                                            <div className="flex items-center">
                                                <TagButton text="Careers" />
                                                <TagButton text="Contact Info" />
                                                <TagButton text="- - - - - - -" />
                                            </div>
                                        </div>

                                    </div>
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
                            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-lg bg-gray-100 dark:shadow-none">
                                <h3 className="tracking-wider border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                                    Safra - Refinary Products
                                </h3>
                                <ul className="p-8 ">
                                    <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10">
                                        <RelatedPost
                                            title="Best way to boost your online sales."
                                            image="/assets/about/operation.gif"
                                            slug="#"
                                            date="12 Feb 2025"
                                        />
                                    </li>
                                    <li className="mb-6 border-b border-body-color border-opacity-10 pb-6 dark:border-white dark:border-opacity-10 ">
                                        <RelatedPost
                                            title="50 Best web design tips & tricks that will help you."
                                            image="/assets/logoOnlyB.png"
                                            slug="#"
                                            date="15 Feb, 2024"
                                        />
                                    </li>
                                    <li>
                                        <RelatedPost
                                            title="The 8 best landing page builders, reviewed"
                                            image="/assets/logoOnlyB.png"
                                            slug="#"
                                            date="05 Jun, 2024"
                                        />
                                    </li>
                                </ul>
                            </div>

                            <div className="shadow-three dark:bg-gray-dark mb-10 rounded-sm bg-white dark:shadow-none">
                                <h3 className="tracking-wider border-b border-body-color border-opacity-10 px-8 py-4 text-lg font-semibold text-black dark:border-white dark:border-opacity-10 dark:text-white">
                                    Related Links | SPP Products
                                </h3>
                                <div className="flex flex-wrap px-8 py-6 ">
                                    <TagButton text="Aliphatic Solvents" />
                                    <TagButton text="Aromatic Solvents" />
                                    <TagButton text="Packaged Products" />
                                    <TagButton text="Customized Products" />
                                    <TagButton text="Trading Products" />
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default RefinaryMain;
