import HowItWork from "@/components/about-us/HowItWork";
import Intro from "@/components/about-us/Intro";
import Leader from "@/components/about-us/Leader";
import CustomSeparator from "@/components/customSeparator";
import GlobalHero from "@/components/globalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechWave | Tentang Kami",
  description:
    "Techwave merupakan perusahaan teknologi yang berfokus pada pengembangan sistem informasi bagi industri dan bisnis. Mulai berdiri dari tahun 2024 dengan tujuan penggunaan teknologi tepat sasaran.",
  keywords:
    "TechWave, tentang techwave, Perkenalan singkat techwave team, visi techwave, misi techwave, cara kerja techwave, diskusikan, bangun, serahkan, direksi techwave",
};

const AboutPage = () => {
  return (
    <main>
      <GlobalHero link="/" linkName="Home" current="tentang kami" />
      <Intro />
      <CustomSeparator />
      <HowItWork />
      <Leader />
    </main>
  );
};
export default AboutPage;
