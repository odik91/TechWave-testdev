"use client";
import { IoApps } from "react-icons/io5";
import meet from "@/public/images/meet.svg";
import app_build from "@/public/images/app-build.svg";
import publish from "@/public/images/publish.svg";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";

type WorkType = {
  id: number;
  image: string;
  title: string;
  desctiption: string;
};

const HowItWork = () => {
  const { isVisible, elementRef } = useIntersectionObserver();
  const works: WorkType[] = [
    {
      id: 1,
      image: meet.src,
      title: "Diskusikan",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quae facere distinctio! Nam, repellendus odit.",
    },
    {
      id: 2,
      image: app_build.src,
      title: "Bangun",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis laudantium odit, provident soluta commodi fugiat.",
    },
    {
      id: 3,
      image: publish.src,
      title: "Serahkan",
      desctiption:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et sunt doloremque, tenetur deserunt voluptatem provident!",
    },
  ];

  return (
    <div
      className="flex justify-center items-center my-6 bg-violet-200"
      style={{
        backgroundImage: `linear-gradient(-76deg, rgba(148, 21, 61, 0.404), rgba(101, 62, 209, 0.356))`,
      }}
    >
      <div className="container p-6">
        <div className="flex justify-center items-center gap-2 mt-6 text-base text-white font-bold mb-3">
          <div className="text-lg">
            <IoApps />
          </div>
          <h4 className="uppercase">Cara kerja kami</h4>
        </div>
        <div
          className={`grid grid-cols-1 lg:grid-cols-3 lg:gap-8 transition-all duration-1000 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[400px]"
          }`}
          ref={elementRef}
        >
          {works.map((work, index) => (
            <div
              key={index}
              className="p-6 flex flex-col justify-center items-center"
            >
              <div
                className="relative flex justify-center w-40 h-40 bg-white shadow-xl shadow-black"
                style={{
                  backgroundImage: `url(${work.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  clipPath:
                    "polygon(80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0 0)",
                }}
              >
                <div
                  className="bg-rose-500 w-full px-5 py-2 text-white font-semibold"
                  style={{ clipPath: "polygon(0 0, 30% 0%, 30% 25%, 0 25%)" }}
                >
                  {work.id}
                </div>
              </div>
              <div className="flex flex-col justify-start items-center my-6 text-white border rounded-xl p-6">
                <h4 className="font-semibold mb-2 text-2xl">{work.title}</h4>
                <p className="text-center">{work.desctiption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default HowItWork;
