import leader01 from "@/public/images/leader-01.jpg";
import leader02 from "@/public/images/leader-02.png";
import leader03 from "@/public/images/leader-03.jpg";
import SectionTitle from "../sectionTitle";

type Leaders = {
  image: string;
  name: string;
  position: string;
};

const Leader = () => {
  const leaders: Leaders[] = [
    {
      image: leader01.src,
      name: "Trueman Zarfat",
      position: "CEO & Founder",
    },
    {
      image: leader02.src,
      name: "Lucais Bellinger",
      position: "Bussines Director",
    },
    {
      image: leader03.src,
      name: "Livia Cristofvao",
      position: "Vice CEO",
    },
  ];
  return (
    <>
      <SectionTitle title="Direksi" />
      <div className="flex justify-center items-center mb-6">
        <div className="container p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 p-2">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="h-72 mb-6 relative shadow-xl"
                style={{
                  backgroundImage: `url(${leader.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "50% 5%",
                }}
              >
                <div className="absolute bottom-0 border w-full bg-opacity-85 bg-white p-2 text-center">
                  <h1 className="font-semibold text-lg text-gray-800">
                    {leader.name}
                  </h1>
                  <span className="font-normal text-base text-rose-600">
                    {leader.position}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Leader;
