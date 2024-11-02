import HowItWork from "@/components/about-us/HowItWork";
import Intro from "@/components/about-us/Intro";
import Leader from "@/components/about-us/Leader";
import CustomSeparator from "@/components/customSeparator";
import GlobalHero from "@/components/globalHero";
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
