import { HiBadgeCheck } from 'react-icons/hi';
import { FiTarget  } from "react-icons/fi";
import { FaRegLightbulb } from "react-icons/fa";

const Features = () => {

    return (
        <section
            id='features'
            className="relative z-10 overflow-hidden  flex justify-center items-center text-center mb-2 bg-white "
        >
            <div className=" pt-20 pb-20 p-4 w-3/4	">
                <div className="grid gap-14 md:grid-cols-3 md:gap-5">

                    <div className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-center shadow-xl transition duration-300 hover:scale-105">
                        <div
                            className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-slate-100 shadow-gray-500/40">
                            <FaRegLightbulb className="h-6 w-6 text-black" />
                        </div>
                        <h1 className="text-white mb-3 text-xl font-medium lg:px-14">Vision</h1>
                        <p className="px-4 text-white">
                            To be a world class hydrocarbon key player, maximizing stakeholders’ benefits, cultivating sustainability, creating value and d nurturing localization.
                        </p>
                    </div>

                    <div data-aos-delay="150" className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-center shadow-2xl transition duration-300 hover:scale-105">
                        <div
                            className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-slate-100 shadow-gray-500/40"
                        >
                            <FiTarget className="h-6 w-6 text-black" />
                        </div>
                        <h1 className="text-white mb-3 text-xl font-medium lg:px-14 ">Mission</h1>
                        <p className="px-4 text-white">
                        To be a world class hydrocarbon key player, maximizing stakeholders’ benefits, cultivating sustainability, creating value and d nurturing localization.
                        </p>
                    </div>

                    <div data-aos-delay="300" className="rounded-xl bg-gradient-to-r from-teal-600 to-teal-700 p-6 text-center shadow-2xl transition duration-300 hover:scale-105">
                        <div
                            className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-slate-100 shadow-gray-500/40">
                            <HiBadgeCheck  className="h-6 w-6 text-black" />
                        </div>
                        <h1 className="text-white mb-3 text-xl font-medium lg:px-14 ">Quality</h1>
                        <p className="px-4 text-white">
                        To be a world class hydrocarbon key player, maximizing stakeholders’ benefits, cultivating sustainability, creating value and d nurturing localization.
                        </p>
                    </div>

                </div>
            </div>
        </section >
    )
}

export default Features