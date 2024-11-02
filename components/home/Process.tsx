import {
  IoBookOutline,
  IoBulbOutline,
  IoCloudUploadOutline,
  IoCodeSlashOutline,
  IoExtensionPuzzleOutline,
  IoSearchOutline,
} from "react-icons/io5";

type DataProcess = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Process = () => {
  const itemPorcess: DataProcess[] = [
    {
      icon: <IoSearchOutline />,
      title: "Riset",
      description: "Melakukan riset masalah yang dihadapi",
    },
    {
      icon: <IoBookOutline />,
      title: "Analisis",
      description:
        "Menyimpulkan masalah dan menentukan pemecahan masalah terbaik",
    },
    {
      icon: <IoBulbOutline />,
      title: "Mockup",
      description:
        "Membuat perancangan aplikasi sesuai analisia yang diperoleh",
    },
    {
      icon: <IoCodeSlashOutline />,
      title: "Develop",
      description: "Membangun dan mengembangkan aplikasi",
    },
    {
      icon: <IoExtensionPuzzleOutline />,
      title: "Testing",
      description: "Test aplikasi sesuai requirement yang ditetapkan",
    },
    {
      icon: <IoCloudUploadOutline />,
      title: "Deploy",
      description: "Melakukan riset masalah yang dihadapi",
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-6 sm:gap-6 my-8">
      {itemPorcess.map((item, index) => {
        const { icon, title, description } = item;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md shadow-fuchsia-950 hover:shadow-black hover:shadow-lg p-6 text-center mb-6"
          >
            <div className="flex justify-center text-[48px] text-violet-600 mb-3">
              {icon}
            </div>
            <h5 className="text-[17px] text-gray-800 font-medium mb-1 tracking-wide">
              {title}
            </h5>
            <p className="font-light text-gray-600 text-sm">{description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default Process;
