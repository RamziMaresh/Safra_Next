import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot, FaRegMessage  } from "react-icons/fa6";

function Footer() {
    return (
        <>
            <div className="bg-gradient-to-r from-yellow-500 to-teal-700 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
                <div className="p-5 ">
                    <ul>
                        <p className="text-white font-bold text-3xl pb-1 tracking-wider">
                            SAFRA <span className="text-white">Co. Ltd.</span>
                        </p>
                        <p className="text-sm tracking-wider pb-6">Solutions For Better Living 1989</p>

                        <div className="flex gap-6 pb-5">
                            <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600" />
                            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                            <FaMailBulk className="text-2xl cursor-pointer hover:text-red-600" />
                        </div>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-200 font-bold text-2xl pb-4">Product</p>
                        <li className="text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Stocks
                        </li>
                        <li className="text-blacktext-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Futures & Options
                        </li>
                        <li className="text-blacktext-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Mutual Funds
                        </li>
                        <li className="text-blacktext-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Fixed deposits
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-200 font-bold text-2xl pb-4">Company</p>
                        <li className="text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            About
                        </li>
                        <li className="text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Products
                        </li>
                        <li className="text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            History
                        </li>
                        <li className="text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Careers
                        </li>
                        <li className="text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            News & Media
                        </li>
                    </ul>
                </div>
                <div className="p-5">
                    <ul>
                        <p className="text-gray-200 font-bold text-2xl pb-4">Support</p>
                        <li className="text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            Contact us
                        </li>
                        <li className="flex text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <FaLocationDot /> &nbsp;  Location : 
                            
                        </li>
                        <li className="flex text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                        <FaPhone className=" " /> &nbsp; +12 XXXX XXX
                        </li>
                        <li className="flex text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <FaPhone className=" " /> &nbsp; +12 XXXX XXX
                        </li>
                        <li className=" flex text-black text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                            <FaPhone className=" " /> &nbsp; +12 XXXX XXX
                        </li>

                    </ul>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center p-5 ">
                <h1 className="font-semibold tracking-wider">
                    © 2023-2024 All rights reserved | Safra Co.Ltd.

                </h1>
            </div>
        </>
    );
}

export default Footer;