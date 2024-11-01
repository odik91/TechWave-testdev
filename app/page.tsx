import { VscFeedback } from "react-icons/vsc";
import { IoLibraryOutline, IoTelescopeOutline } from "react-icons/io5";
import Hero from "@/components/home/Hero";

const HomePage = () => {  
  return (
    <>
      <Hero />

      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-6 w-10/12 -mt-10 z-10">
          <div className="bg-white border rounded-3xl p-6 text-center shadow-xl mb-7">
            <div>
              <div className="text-center flex justify-center items-center">
                <div
                  className="bg-rose-400 w-full rounded-full flex justify-center items-center text-white mb-4"
                  style={{ width: "90px", height: "90px" }}
                >
                  <VscFeedback className="text-5xl" />
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lg tracking-wider font-medium text-gray-800 mb-2">
                Hearing
              </h5>
              <p className="text-gray-600">Kami mendengarkan masalah anda <br /> untuk menganalisa kebutuhan</p>
            </div> 
          </div>
          <div className="bg-white border rounded-3xl p-6 text-center shadow-xl mb-7">
            <div>
              <div className="text-center flex justify-center items-center">
                <div
                  className="bg-rose-400 w-full rounded-full flex justify-center items-center text-white mb-4"
                  style={{ width: "90px", height: "90px" }}
                >
                  <IoTelescopeOutline className="text-5xl" />
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lg tracking-wider font-medium text-gray-800 mb-2">
                Analyze
              </h5>
              <p className="text-gray-600">Rumusan masalah dan solusi <br /> tepat penyelesaian</p>
            </div>
          </div>
          <div className="bg-white border rounded-3xl p-6 text-center shadow-xl mb-7">
            <div>
              <div className="text-center flex justify-center items-center">
                <div
                  className="bg-rose-400 w-full rounded-full flex justify-center items-center text-white mb-4"
                  style={{ width: "90px", height: "90px" }}
                >
                  <IoLibraryOutline className="text-5xl" />
                </div>
              </div>
            </div>
            <div>
              <h5 className="text-lg tracking-wider font-medium text-gray-800 mb-2">
                Build
              </h5>
              <p className="text-gray-600">Perencanaan, develop, testing dan deploy <br /> hingga app siap digunakan</p>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque inventore tempora quasi eius officia sint nam ea facilis, natus consectetur iure, mollitia alias reprehenderit, assumenda nostrum temporibus esse? Nulla, veniam blanditiis libero error cupiditate molestiae, laboriosam unde culpa optio est nostrum adipisci magnam in impedit rerum sit. Quis, placeat temporibus. Magni vitae fugit sunt in beatae harum facere magnam, blanditiis officiis, omnis, enim fuga. Ullam expedita minus harum, similique molestiae perspiciatis quod dignissimos nesciunt inventore sed asperiores magni enim voluptate.</p>
      </div>
    </>
  );
};
export default HomePage;
