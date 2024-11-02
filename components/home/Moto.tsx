"use client";

import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { IoLibraryOutline, IoTelescopeOutline } from "react-icons/io5";
import { VscFeedback } from "react-icons/vsc";

type MotoItem = {
  icon: JSX.Element;
  title: string;
  description: JSX.Element;
};

const Moto = () => {
  const { isVisible, elementRef } = useIntersectionObserver(0.1, true);
  const items: MotoItem[] = [
    {
      icon: <VscFeedback className="text-5xl" />,
      title: "Hearing",
      description: (
        <>
          Kami mendengarkan masalah anda untuk menganalisa kebutuhan
        </>
      ),
    },
    {
      icon: <IoTelescopeOutline className="text-5xl" />,
      title: "Analyze",
      description: (
        <>
          Rumusan masalah dan solusi dengan penyelesaian yang tepat
        </>
      ),
    },
    {
      icon: <IoLibraryOutline className="text-5xl" />,
      title: "Build",
      description: (
        <>
          Perencanaan, develop, testing dan deploy hingga app siap
          digunakan
        </>
      ),
    },
  ];
  return (
    <section className="flex justify-center" id="more">
      <div
        className={`grid grid-cols-1 sm:grid-cols-3 sm:gap-6 w-10/12 -mt-10 z-10 transition-all duration-1000 ease-in-out delay-75 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        ref={elementRef}
      >
        {items.map((item) => {
          const { icon, title, description } = item;

          return (
            <div
              key={title}
              className="bg-white border rounded-3xl p-6 text-center shadow-xl mb-7"
            >
              <div>
                <div className="text-center flex justify-center items-center">
                  <div
                    className="bg-rose-400 w-full rounded-full flex justify-center items-center text-white mb-4"
                    style={{ width: "90px", height: "90px" }}
                  >
                    {icon}
                  </div>
                </div>
              </div>
              <div>
                <h5 className="text-lg tracking-wider font-medium text-gray-800 mb-2">
                  {title}
                </h5>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Moto;
