
import { Metadata } from "next";
//
import RefinaryMain from "@/app/components/refinary/RefinaryMain";

export const metadata: Metadata = {
    title: "Refinary | Safra Co. Ltd.",
    description: "",
    // other metadata
};

const Refinary = () => {
    return (
        <>
            <RefinaryMain />
        </>
    );
};

export default Refinary;

