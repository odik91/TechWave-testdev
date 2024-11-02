import Image from "next/image"
import conversation from "@/public/images/conversation.svg";

const Discussion = () => {
  return (
    <section className="flex justify-center items-center my-6">
        <div className="container p-6 grid grid-cols-1 sm:grid-cols-2">
          <div className="p-6 flex justify-center">
            <Image
              alt="conversation"
              src={conversation.src}
              sizes="(max-width: 768px) 100vw, 33vw"
              width={500}
              height={500}
            />
          </div>
          <div className="p-6 flex flex-col justify-center items-start">
            <h5 className="font-medium text-2xl text-gray-800 tracking-wider mb-3">
              Mari diskusikan tentang proyek anda
            </h5>
            <p className="text-gray-600 font-normal tracking-wider">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusamus odit, quam ducimus vel dolorem sunt quas pariatur magnam
              rem reprehenderit laboriosam harum mollitia
            </p>
          </div>
        </div>
      </section>
  )
}
export default Discussion