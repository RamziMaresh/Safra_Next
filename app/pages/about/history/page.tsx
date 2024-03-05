

import { Metadata } from "next";

import HistorySafra from "@/app/components/about/history/History";
export const metadata: Metadata = {
    title: "Solutions For | Safra Co. Ltd.",
    description: "",
    // other metadata
};

const History = () => {
    return (
        <>
            <HistorySafra />

        </>
    );
};

export default History;
