
import { Metadata } from "next";
//
import ReProducts from "@/app/components/refinary/productsMain/RefProducts";
export const metadata: Metadata = {
    title: "Refinary Products | Safra Co. Ltd.",
    description: "",
    // other metadata
};

const RefinaryProducts = () => {
    return (

        <>
            <ReProducts/>
        </>


    );
};

export default RefinaryProducts;

