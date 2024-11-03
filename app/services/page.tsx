import GlobalHero from "@/components/globalHero";
import Consultation from "@/components/services/Consultation";
import OurService from "@/components/services/OurService";
import AppBuild from "@/components/services/AppBuild";
import CloudService from "@/components/services/CloudService";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechWave | Layanan",
  description:
    "Layanan tersedia di techwave",
  keywords:
    "layanan techwave, layanan kami, konsultasi, pembuatan aplikasi, layanan cloud, cloud platform, on premise server, multi app",
};

const ServicePage = () => {
  return (
    <main>
      <GlobalHero link="/" linkName="Home" current="Layanan" />
      <OurService />
      <Consultation />
      <AppBuild />
      <CloudService />
    </main>
  );
};
export default ServicePage;
