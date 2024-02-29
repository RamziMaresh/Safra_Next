
import { Metadata } from "next";
//
import ReProfileOne from "@/app/components/refinary/refinaryProfile/ReProfileOne";

export const metadata: Metadata = {
    title: "Refinary | Safra Co. Ltd.",
    description: "",
    // other metadata
};

const Refinary = () => {
    return (
        <>
            <ReProfileOne />
        </>
    );
};

export default Refinary;

