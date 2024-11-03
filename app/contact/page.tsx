import ContactForm from "@/components/contact/ContactForm";
import Map from "@/components/contact/Map";
import GlobalHero from "@/components/globalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "TechWave | Kontak",
  description:
    "Techwave hubungi kami, jika anda terdapat pertanyaan atau anda ingin diskusi tentang projek dan malasah sistem informasi, anda dapat menghubungi kami melalui form berikut.",
  keywords: "TechWave, kontak techwave, kontak kami, alamat techwave",
};

const ContactPage = () => {
  return (
    <main>
      <GlobalHero link="/" linkName="Home" current="Kontak" />

      <ContactForm />

      <Map />
    </main>
  );
};
export default ContactPage;
