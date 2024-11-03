import Image from "next/image";
import meet from "@/public/images/meet.svg";
import SectionTitle from "@/components/sectionTitle";

const Consultation = () => {
  return (
    <div className="flex justify-center items-start mb-6">
      <div className="container p-6 w-10/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
          <div className="p-6 flex justify-center items-center">
            <Image
              alt="portofolio1"
              src={meet.src}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={500}
              height={500}
              className="shadow-xl"
            />
          </div>
          <div className="p-6">
            <div className="-mt-8 mb-6">
              <SectionTitle title="Konsultasi" />
            </div>
            <p className="text-gray-600 tracking-wider text-base">
              Konsultasi pembuatan aplikasi kami hadir untuk membantu Anda
              mewujudkan ide digital Anda menjadi aplikasi yang fungsional dan
              menarik. Dengan pengalaman luas dalam berbagai teknologi seperti
              React Native, kami siap mendampingi Anda dalam setiap tahap
              pengembangan, mulai dari perencanaan hingga peluncuran. Layanan
              konsultasi ini dirancang untuk memahami kebutuhan spesifik bisnis
              Anda dan memberikan solusi yang tepat guna, dengan fokus pada
              kinerja, keandalan, dan pengalaman pengguna yang optimal. Dapatkan
              saran ahli untuk memastikan aplikasi Anda siap bersaing di pasar!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Consultation;
