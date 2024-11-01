"use client";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { Button } from "@/components/ui/button";
import bg from "@/public/images/bg.jpg";
import Link from "next/link";

const Hero = () => {
  const { isVisible, elementRef } = useIntersectionObserver();
  return (
    <header
      className="relative flex justify-center h-[80vh] min-h-[600px]"
      style={{
        backgroundImage: `linear-gradient(-76deg, rgba(148, 21, 61, 0.733), rgba(101, 62, 209, 0.911)), url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={elementRef}
        className={`container h-[100%] max-w-[80vw] sm:max-w-[90vw] p-[15px] transition-all duration-1000 ease-in-out delay-150 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-[400px]"
        } flex justify-center items-center`}
      >
        <div className="text-center text-white">
          <h1
            className="font-medium text-3xl sm:text-4xl tracking-wider mb-7 sm:mb-5"
            style={{ lineHeight: "54px" }}
          >
            Kami Menyediakan <strong>Solusi</strong> Terbaik <br />
            Sesuai <strong>Kebutuhan</strong> Bisnis Anda
          </h1>
          <div className="flex justify-center items-center">
            <div className="w-full max-w-[800px]">
              <p className="leading-7 tracking-wider text-sm sm:text-lg font font-light mb-7">
                TechWare merupakan perusahaan profesional dalam pengembangan
                aplikasi guna menunjang kebutuhan industri dan bisnis yang anda
                bangun
              </p>
            </div>
          </div>
          <Button
            asChild
            className="rounded-full bg-rose-500 hover:bg-rose-600 hover:shadow-md hover:shadow-gray-900 mb-7"
            variant="destructive"
          >
            <Link href="#" className="tracking-widest uppercase font-light">
              baca lagi
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Hero;
