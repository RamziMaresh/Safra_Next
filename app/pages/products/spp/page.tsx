
import { Metadata } from "next";
//
import Spp from "@/app/components/spp/SppMain";

export const metadata: Metadata = {
    title: "SPP Products | Safra Co. Ltd.",
    description: "",
    // other metadata
};

const Refinary = () => {
    return (
        <>
            <Spp />
        </>
    );
};

export default Refinary;

