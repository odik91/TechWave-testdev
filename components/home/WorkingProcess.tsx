import Process from "./Process";

const WorkingProcess = () => {
  return (
    <section
      className="flex justify-center items-center my-6 bg-violet-600"
      style={{
        backgroundImage: `linear-gradient(-76deg, rgba(148, 21, 61, 0.404), rgba(101, 62, 209, 0.356))`,
      }}
    >
      <div className="container p-6 text-center">
        <div className="text-white my-8 flex justify-center">
          <div className="max-w-2xl">
            <h2 className="font-medium text-[28px] tracking-wide mb-5">
              Proses Kerja
            </h2>
            <p className="tracking-wide font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              veniam magnam laudantium at, illum libero ratione cupiditate
            </p>
          </div>
        </div>
        <Process />
      </div>
    </section>
  );
};
export default WorkingProcess;
