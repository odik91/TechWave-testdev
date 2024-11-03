import solution from "@/public/images/solution.svg";
import Image from "next/image";

const Solution = () => {
  return (
    <section className="flex justify-center items-center mb-6">
      <div className="container p-6 grid grid-cols-1 sm:grid-cols-2">
        <div className="p-6 flex flex-col justify-center items-start">
          <h5 className="font-medium text-2xl text-gray-800 tracking-wider mb-3">
            Dapatkan solusi terbaik
          </h5>
          <p className="text-gray-600 font-normal tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos quis
            molestias amet, sapiente, nihil exercitationem error minima
            assumenda dolorem recusandae voluptates perspiciatis! Dolorum
            adipisci, exercitationem quod natus amet magnam autem.
          </p>
        </div>
        <div className="p-6 flex justify-center">
          <Image
            alt="portofolio1"
            src={solution.src}
            sizes="(max-width: 768px) 100vw, 33vw"
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};
export default Solution;
