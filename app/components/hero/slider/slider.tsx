"use client";

import sliderData from "./sliderData";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaRegLightbulb } from "react-icons/fa6";

export default function Slider() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className=""
    >
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "75vh"
        }}>
        <div className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('/assets/about/background.jpeg')"
          }}>
          <span id="blackOverlay" className="w-full h-full absolute opacity-65 bg-black"></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div className="pr-12">
                <h1 className="text-white font-semibold text-5xl">
                  Solutions For Better Lving
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Safra is a leading producer and distributor of Hydrocarbon solvents and Chemicals.
                  Our environmental friendly solvents comply with the highest international quality and safety standards.
                </p>
              </div>
            </div>

          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: "70px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            //xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-white -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-600">
                    <i className="fas fa-award"></i>
                  </div>
                  <h6 className="text-xl font-semibold"> Value One</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    safra is safra safra is safra safra is safra safra is safra safra is safra safra is safra safra is safra !
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-600">
                    <i className="fas fa-retweet"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                     Value Two
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    safra is safra safra is safra safra is safra safra is safra safra is safra safra is safra safra is safra !
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-teal-600">
                    <i className="fas fa-fingerprint"></i>
                  </div>
                  <h6 className="text-xl font-semibold">
                     Value Three
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    safra is safra safra is safra safra is safra safra is safra safra is safra safra is safra safra is safra !
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-teal-600">
              <FaRegLightbulb className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal tracking-wide">
              Discover Safra

              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700 text-justify">
                SAFRA is a manufacturer and distributor of hydrocarbon solvents having a refinery
                located at Yanbu Industrial City on the west coast of Saudi Arabia, and corporate office at Jeddah.
                The company serves industries of paints,dhesives, insecticides & pesticides, thinner, alkyd resins, industrial cleaning, maintenance solvents,
                dry cleaning, spot removing, wood protection, varnishes, construction chemicals, oil field chemicals, and Bitumen based products.
              </p>
              <a
                href="/"
                className="font-bold text-gray-800 mt-8"
              >
                Read More About Us! 
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-gradient-to-r from-teal-700 to-yellow-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                      height: "95px",
                      top: "-94px"
                    }}
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-teal-600 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Top Notch Services
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    The Arctic Ocean freezes every winter and much of the
                    sea-ice then thaws every summer, and that process will
                    continue whatever happens.
                  </p>
                </blockquote>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}