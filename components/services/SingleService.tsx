import { ServiceType } from "./OurService";

type PropsData = ServiceType & { key: number };

const SingleService = ({ key, icon, title, description }: PropsData) => {
  return (
    <div
      key={key}
      className="border bg-slate-200 shadow-lg rounded-xl p-6 hover:shadow-2xl hover:bg-slate-100"
    >
      <div className="text-violet-600 text-7xl mb-3">{icon}</div>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="font-light text-gray-600 text-base">{description}</p>
    </div>
  );
};
export default SingleService;
