import { IoApps } from "react-icons/io5";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-center items-center gap-2 mt-10 text-base text-rose-400 font-bold">
      <div className="text-lg">
        <IoApps />
      </div>
      <h4 className="uppercase">{title}</h4>
    </div>
  );
};
export default SectionTitle;
