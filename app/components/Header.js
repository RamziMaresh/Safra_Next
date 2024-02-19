"use client";
// https://nextjstemplates.com/templates/startup 
import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image'
import { Popover } from "@headlessui/react"
// Icons
import {
  Bars3Icon,
  XMarkIcon,
  Square3Stack3DIcon,
  BookOpenIcon,
  GlobeAltIcon
} from "@heroicons/react/24/solid";
import ThemeSwitch from "./ThemeSwitch";
//

const Header = () => {
  const currentRoute = usePathname();
  //


  return (
    <Popover
      className={"container mx-auto flex item-center border-b-2 px-6 py-6 h-24"}
    >

      <Link href="/" className="">
        <Image
          src="/assets/logoOnlyB.png"
          alt="safra"
          width={50}
          height={50}
          className="cursor-pointer"
        />
      </Link>
      <h1 className="font-bold text-gray-600 px-1 py-6 tracking-wider">Safra</h1>

      <nav className="grow">
        <div className="hidden sm:md:flex items-center justify-center gap-2 md:gap-8">

          <Link href="/"
            className={"flex tracking-wider" +
              (currentRoute === "/" ? " border-b-2 border-teal-600" : "")}
          >
            <Square3Stack3DIcon className="h-5 w-4 mr-1 text-teal-700" />Home
          </Link>

          <Link href="/pages/about"
            className={"flex tracking-wider" +
              (currentRoute === "/pages/about" ? " border-b-2 border-teal-600" : "")}
          >
            <Square3Stack3DIcon className="h-5 w-4 mr-1 text-teal-700" />About
          </Link>

          <Link className="flex tracking-wider" href="/">
            <BookOpenIcon className="h-5 w-4 mr-1 text-teal-700" /> History
          </Link>

          <Link href="/pages/products"
            className={"flex tracking-wider" +
              (currentRoute === "/pages/products" ? " border-b-2 border-teal-600" : "")}
          >
            <Square3Stack3DIcon className="h-5 w-4 mr-1 text-teal-700" /> Products
          </Link>

          <Link href="/pages/contact"
            className={"flex tracking-wider" +
              (currentRoute === "/pages/contact" ? " border-b-2 border-teal-600" : "")}
          >
            <Square3Stack3DIcon className="h-5 w-4 mr-1 text-teal-700" />Contact
          </Link>
        </div>
      </nav>

      {/** */}
      <div className="flex grow items-center justify-end sm:md:hidden">
        <div className=" sm:md:block">
          <ThemeSwitch />
        </div>
        <Popover.Button
          className="inline-flex items-center justify-center rounded-md bg-transform p-2 
        text-gry-400 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Open Menu</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </Popover.Button>
      </div>

      <Popover.Panel
        className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
      >
        <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="">
                <Image
                  src="/assets/logoOnlyB.png"
                  alt="safra"
                  width={50}
                  height={50}
                />
              </Link>

              {/** */}
              <div className="-mt-2">
                <Popover.Button
                  className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gry-400 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close Menu</span>
                  <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
                </Popover.Button>
              </div>
            </div>

            {/** */}
            <div className="mt-6">
              <div className="grid gap-y-8">

                <Link href="/"
                  className={"flex" +
                    (currentRoute === "/" ? " border-b-2 border-teal-700" : " text-black")}
                >
                  <Square3Stack3DIcon className="h-5 w-4 mr-1 text-teal-800 " /> Home
                </Link>

                <Link
                  href="/pages/about"
                  className={"flex" +
                    (currentRoute === "/pages/about" ? " border-b-2 border-teal-700" : " text-black")}
                >
                  <Square3Stack3DIcon className="h-5 w-4 mr-1 text-teal-800 " /> About
                </Link>

                <Link className="flex" href="/">
                  <BookOpenIcon className="h-5 w-4 mr-1 text-teal-800 " /> Safra History
                </Link>

                <Link className="flex" href="/">
                  <Square3Stack3DIcon className="h-5 w-4 mr-1 text-teal-800 " /> Products
                </Link>

                <Link href="/pages/contact"
                  className={"flex" +
                    (currentRoute === "/pages/contact" ? " border-b-2 border-teal-700" : " text-black")}
                >
                  <Square3Stack3DIcon className="h-5 w-4 mr-1 text-teal-800 " /> Contact
                </Link>

              </div>
            </div>

            <div className="mt-6 flex flex-col item-center gap-2">
              <Link className="flex rounded-md px-4 py-2 text-sm border-2 font-medium md:text-xl w-full text-black bg-gradient-to-r from-yellow-600 to-teal-900 " href="/">
                <GlobeAltIcon className="mr-1 w-5 h-4" />AR / EN
              </Link>
            </div>

          </div>
        </div>
      </Popover.Panel>
      <div className="hidden sm:md:block">
        <ThemeSwitch />
      </div>
      <div className="hidden sm:md:block">
        <Link className="flex " href="/">
          <GlobeAltIcon className="mr-0 text-black w-6 h-5" /> 
        </Link>
      </div>
    </Popover>

  );
}
export default Header