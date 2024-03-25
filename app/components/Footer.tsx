import Image from "next/image";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Footer() {
    const now = new Date();

    return (
        <>
            <div className="bg-gradient-to-r from-teal-600 to-teal-700
            h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20"
            >

                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-3xl pb-1 tracking-wider">
                            Safra <span className="text-white ">Co. Ltd.</span>
                        </p>
                        <p className="text-sm tracking-wider mb-4 text-gray-200 ">Solutions For Better Living.</p>
                        <div className="mb-6">
                            <Image
                                src=
                                {"/assets/Footer/safralinesd.png"}
                                width={80}
                                height={100}
                                alt="safra-img-l"
                                className=""
                            />
                        </div>
                        <div className="flex gap-6 pb-5 text-white">
                            <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-400" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-yellow-400" />
                            <FaMailBulk className="text-2xl cursor-pointer hover:text-yellow-400" />
                        </div>
                    </ul>
                </div >
                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Product</p>
                        <li className="text-md pb-1 hover:text-yellow-400 cursor-pointer text-gray-200">
                            Safra Packaged Products
                        </li>
                        <li className="text-md pb-1 hover:text-yellow-400 cursor-pointer text-gray-200">
                            Aliphatic Solvents
                        </li>
                        <li className="text-md pb-1 hover:text-yellow-400 cursor-pointer text-gray-200">
                            Aromatic Solvents
                        </li>

                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Company</p>
                        <li className="text-md pb-1 hover:text-yellow-400 cursor-pointer text-gray-200">
                            About
                        </li>
                        <li className="text-md pb-1 hover:text-yellow-400 cursor-pointer text-gray-200">
                            Products
                        </li>
                        <li className="text-md pb-1 hover:text-yellow-400 cursor-pointer text-gray-200">
                            Careers
                        </li>
                        <li className="text-md pb-1 hover:text-yellow-400 cursor-pointer text-gray-200">
                            News & Media
                        </li>
                        <li className="text-md pb-1 hover:text-yellow-400 cursor-pointer text-gray-200">
                            Contact Us
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-white font-bold text-2xl pb-4">Support</p>
                        <li className="text-md pb-2 text-gray-200">
                            Contact us
                        </li>
                        <li className="flex text-md pb-2 text-gray-200">
                            <FaLocationDot /> &nbsp;  Location :

                        </li>
                        <li className="flex text-md pb-2  text-gray-200">
                            <FaPhone className=" " /> &nbsp; +12 XXXX XXX
                        </li>
                        <li className="flex text-md pb-2  text-gray-200">
                            <FaPhone className=" " /> &nbsp; +12 XXXX XXX
                        </li>
                        <li className=" flex text-md pb-2  text-gray-200">
                            <FaPhone className=" " /> &nbsp; +12 XXXX XXX
                        </li>

                    </ul>
                </div>
            </div >
            <div className="flex flex-col justify-center items-center text-center p-5 dark:bg-teal-800">
                <h1 className="tracking-wider">
                    © {new Date().getFullYear()} All rights reserved | Safra Co.Ltd.

                </h1>
            </div>
        </>
    );
}

export default Footer;