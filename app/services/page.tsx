import GlobalHero from "@/components/globalHero";
import OurService from "@/components/services/OurService";

const ServicePage = () => {
  return (
    <main>
      <GlobalHero link="/" linkName="Home" current="Layanan" />
      <OurService />
    </main>
  );
};
export default ServicePage;
