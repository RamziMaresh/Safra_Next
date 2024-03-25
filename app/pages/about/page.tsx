import AboutSectionThree from "@/app/components/about/abPresidentMess";
import AboutMess from "../../components/about/aboutMessage";
import AbuPhilosophy from "../../components/about/abPhilosophy";
import AbFeatures from "@/app/components/about/aboutFeature";

import { Metadata } from "next";
import Solutions from "@/app/components/about/SolutionsFor";
import AbBoard from "@/app/components/about/abBoard";

export const metadata: Metadata = {
  title: "About Us ! | Safra Co. Ltd.",
  description: "",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <AboutMess />
      <AbBoard />
      <AboutSectionThree />
      <AbuPhilosophy />
      <AbFeatures />
      <Solutions />
    </>
  );
};

export default AboutPage;
