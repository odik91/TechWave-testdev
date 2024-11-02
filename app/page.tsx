import CustomSeparator from "@/components/customSeparator";
import Discussion from "@/components/home/Discussion";
import Hero from "@/components/home/Hero";
import Moto from "@/components/home/Moto";
import Solution from "@/components/home/Solution";
import Testimoni from "@/components/home/Testimoni";
import WorkingProcess from "@/components/home/WorkingProcess";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechWave | Home",
  description:
    "TechWare merupakan perusahaan profesional dalam pengembangan aplikasi guna menunjang kebutuhan industri dan bisnis yang anda bangun",
  keywords:
    "TechWave, TechWave company, hearing, analyze, build, Mari diskusikan tentang proyek anda, Dapatkan solusi terbaik, Proses Kerja, riset, analist, mockup, develop, testing, deploy, testimoni klien",
};

const HomePage = () => {
  return (
    <>
      <Hero />
      <Moto />
      <Discussion />
      <CustomSeparator />
      <Solution />
      <WorkingProcess />
      <Testimoni />
    </>
  );
};
export default HomePage;
