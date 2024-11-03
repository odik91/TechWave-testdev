"use client";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import background from "@/public/images/corporate.jpg";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";

type AboutProps = {
  link: string;
  linkName: string;
  current: string;
};

const GlobalHero = ({ link, linkName, current }: AboutProps) => {
  const { isVisible, elementRef } = useIntersectionObserver();
  return (
    <div
      className="h-[50vh] min-h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(101, 62, 209, 0.418), rgba(0, 0, 0, 0.452)), url(${background.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={`flex flex-col justify-start items-center shadow-lg border-gray-100 rounded-lg p-6 text-white transition-all duration-1000 ease-in-out delay-75 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
        style={{ backdropFilter: "blur(4px)" }}
        ref={elementRef}
      >
        <h1 className="text-5xl font-semibold tracking-wider capitalize">
          {current}
        </h1>
        <div className="mt-6 flex justify-center items-center text-base">
          <Link href={link}>{linkName}</Link> <IoChevronForward />{" "}
          <span className="capitalize">{current}</span>
        </div>
      </div>
    </div>
  );
};
export default GlobalHero;
