import AboutSectionOne from "../../components/about/AboutSectionOne";
import AboutSectionTwo from "../../components/about/AboutSectionTwo";

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
    </>
  );
};

export default AboutPage;
