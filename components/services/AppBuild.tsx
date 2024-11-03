import SectionTitle from "@/components/sectionTitle";
import Image from "next/image";
import buildApp from "@/public/images/build-app.svg";

const AppBuild = () => {
  return (
    <div className="flex justify-center items-start mb-6">
      <div className="container p-6 w-10/12">
        <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-6">
          <div className="p-6">
            <div className="-mt-8 mb-6">
              <SectionTitle title="Pembuatan aplikasi" />
            </div>
            <p className="text-gray-600 tracking-wider text-base">
              Kami menawarkan layanan pembuatan aplikasi yang dirancang khusus
              untuk memenuhi kebutuhan bisnis Anda. Dengan pendekatan yang
              berfokus pada hasil, kami menggabungkan desain yang intuitif dan
              teknologi terbaru untuk menciptakan aplikasi yang responsif, aman,
              dan mudah digunakan. Tim kami memiliki keahlian dalam berbagai
              platform dan bahasa pemrograman, termasuk React Native, untuk
              memastikan aplikasi Anda bisa berjalan lancar di berbagai
              perangkat. Dari tahap perencanaan hingga pengembangan dan
              pengujian, kami berkomitmen untuk memberikan hasil yang
              berkualitas tinggi agar aplikasi Anda siap bersaing dan memberikan
              pengalaman terbaik bagi pengguna.
            </p>
          </div>
          <div className="p-6 flex justify-center items-center">
            <Image
              alt="portofolio1"
              src={buildApp.src}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={500}
              height={500}
              className="shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppBuild;
