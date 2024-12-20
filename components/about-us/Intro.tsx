import person01 from "@/public/images/people-01.jpg";
import person02 from "@/public/images/people-02.jpg";
import person03 from "@/public/images/people-03.png";
import SectionTitle from "../sectionTitle";

const Intro = () => {
  return (
    <div
      className={`flex justify-center items-center my-6 transition-all duration-1000 ease-in-out delay-75`}
    >
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 w-10/12">
        <div>
          <div className="relative h-[300px] sm:h-[60vh] overflow-hidden">
            <div
              className="rounded-xl h-full w-9/12 shadow-lg"
              style={{
                backgroundImage: `url(${person01.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="absolute h-2/5 w-5/12 z-10 right-0 top-5 shadow-lg rounded-xl"
              style={{
                backgroundImage: `url(${person02.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div
              className="absolute rounded-xl h-2/5 w-5/6 z-20 right-0 bottom-5 sm:bottom-10 shadow-lg"
              style={{
                backgroundImage: `url(${person03.src})`,
                backgroundSize: "cover",
                backgroundPosition: "10% 50%",
              }}
            ></div>
          </div>
        </div>
        <div className="p-6">
          <SectionTitle title="Tentang kami" />
          <br />
          <h2 className="text-3xl font-semibold tracking-wide text-gray-800 mb-6">
            Perkenalan singkat techwave team
          </h2>
          <p className="tracking-wider text-base text-gray-600 pb-2">
            Techwave merupakan perusahaan teknologi yang berfokus pada
            pengembangan sistem informasi bagi industri dan bisnis. Mulai
            berdiri dari tahun 2024 dengan tujuan penggunaan teknologi tepat
            sasaran.
          </p>
          <p className="tracking-wider text-base text-gray-600 pb-2">
            <strong>Visi</strong> kami menjadi yang terdepan dalam penyediaan
            dan pengembangan sistem informasi beserta penyediaan infrastruktur
            yang tangguh.
          </p>
          <p className="tracking-wider text-base text-gray-600 pb-2">
            <strong>Misi</strong> kami pemberdayaan teknologi yang bekelanjutan
            untuk kemajuan industri dan bisnis
          </p>
        </div>
      </div>
    </div>
  );
};
export default Intro;
