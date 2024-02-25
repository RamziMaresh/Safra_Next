import AboutSectionThree from "@/app/components/about/AboutSectionThree";
import AboutSectionOne from "../../components/about/AboutSectionOne";
import AboutSectionTwo from "../../components/about/AboutSectionTwo";
import AboutSectionFour from "../../components/about/AboutSectionFour";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us ! | Safra Co. Ltd.",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutSectionOne />
      <AboutSectionTwo />
      <AboutSectionThree />
      <AboutSectionFour />

    </>
  );
};

export default AboutPage;
