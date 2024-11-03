import SectionTitle from "../sectionTitle";
import {
  IoCloudDoneOutline,
  IoFileTrayStackedOutline,
  IoLogoSoundcloud,
  IoQrCodeOutline,
} from "react-icons/io5";

type CloudType = {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
};

const CloudService = () => {
  const items: CloudType[] = [
    {
      icon: <IoLogoSoundcloud />,
      title: "Cloud Platform",
      description: (
        <ul className="list-none">
          <li className="flex justify-start items-start py-1">
            <div className="text-xl text-rose-500">
              <IoCloudDoneOutline />
            </div>
            <span className="px-3">
              Tersedia layanan integrasi GCP, AWS dan Alibaba Cloud
            </span>
          </li>
          <li className="flex justify-start items-start py-1">
            <div className="text-xl text-rose-500">
              <IoCloudDoneOutline />
            </div>
            <span className="px-3">Integrasi Kubernetes Engine</span>
          </li>
          <li className="flex justify-start items-start py-1">
            <div className="text-xl text-rose-500">
              <IoCloudDoneOutline />
            </div>
            <span className="px-3">Docker Setup</span>
          </li>
          <li className="flex justify-start items-start py-1">
            <div className="text-xl text-rose-500">
              <IoCloudDoneOutline />
            </div>
            <span className="px-3">
              CI/CD seperti penggunaan jenkins dan codeship
            </span>
          </li>
        </ul>
      ),
    },
    {
      icon: <IoFileTrayStackedOutline />,
      title: "On Premise Server",
      description: (
        <ul className="list-none">
          <li className="flex justify-start items-start py-1">
            <span className="text-xl text-rose-500">
              <IoFileTrayStackedOutline />
            </span>
            <span className="px-3">Penyediaan private server yang tangguh</span>
          </li>
          <li className="flex justify-start items-start py-1">
            <span className="text-xl text-rose-500">
              <IoFileTrayStackedOutline />
            </span>
            <span className="px-3">
              Penggunaan processor terbaik dengan performa dan efisiensi yang
              baik
            </span>
          </li>
          <li className="flex justify-start items-start py-1">
            <span className="text-xl text-rose-500">
              <IoFileTrayStackedOutline />
            </span>
            <span className="px-3">Jaminan uptime hingga 99,99%</span>
          </li>
          <li className="flex justify-start items-start py-1">
            <span className="text-xl text-rose-500">
              <IoFileTrayStackedOutline />
            </span>
            <span className="px-3">Gratis biaya backup data</span>
          </li>
        </ul>
      ),
    },
    {
      icon: <IoQrCodeOutline />,
      title: "Multi App",
      description: (
        <ul className="list-none">
          <li className="flex justify-start items-start py-1">
            <div className="text-xl text-rose-500">
              <IoQrCodeOutline />
            </div>
            <span className="px-3">Pengembangan aplikasi berbasis web</span>
          </li>
          <li className="flex justify-start items-start py-1">
            <div className="text-xl text-rose-500">
              <IoQrCodeOutline />
            </div>
            <span className="px-3">
              Pengembangan aplikasi mobile untuk android dan ios
            </span>
          </li>
          <li className="flex justify-start items-start py-1">
            <div className="text-xl text-rose-500">
              <IoQrCodeOutline />
            </div>
            <span className="px-3">
              Pengembangan aplikasi desktop multi environment windows, mac dan
              linux
            </span>
          </li>
        </ul>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-start mb-6">
      <div className="container p-6 w-10/12">
        <div className="flex flex-col justify-start items-center">
          <SectionTitle title="Layanan Cloud" />
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-6 my-6 w-full ">
            {items.map((item, index) => (
              <div
                key={index}
                className="border p-6 shadow-xl mb-6 auto-cols-max"
              >
                <div className="flex justify-center text-7xl text-rose-600 mb-3">
                  {item.icon}
                </div>
                <h5 className="text-[17px] text-violet-600 font-semibold mb-1 tracking-wide text-center">
                  {item.title}
                </h5>
                <div className="font-light text-gray-600 text-sm">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default CloudService;
