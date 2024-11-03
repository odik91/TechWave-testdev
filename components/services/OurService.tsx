import {
  IoCloudDoneOutline,
  IoCodeSlashOutline,
  IoColorPaletteOutline,
} from "react-icons/io5";
import SectionTitle from "../sectionTitle";
import SingleService from "./SingleService";

export type ServiceType = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const OurService = () => {
  const services: ServiceType[] = [
    {
      icon: <IoColorPaletteOutline />,
      title: "Konsultasi",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium illum deleniti autem aliquam ipsam.",
    },
    {
      icon: <IoCodeSlashOutline />,
      title: "Pembuatan Aplikasi",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis mollitia alias nisi aspernatur.",
    },
    {
      icon: <IoCloudDoneOutline />,
      title: "Layanan Cloud",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, nemo nulla? Quis, rem ducimus.",
    },
  ];
  return (
    <>
      <SectionTitle title="Layanan kami" />
      <div className="flex justify-center items-start mb-6">
        <div className="container p-6 w-10/12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index}>
                <SingleService
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default OurService;
