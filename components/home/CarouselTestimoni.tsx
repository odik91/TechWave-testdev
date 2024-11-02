"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

type TestimoniItems = {
  image: string;
  name: string;
  position: string;
  testimoni: string;
};

const CarouselTestimoni = () => {
  const testimoniItems: TestimoniItems[] = [
    {
      image: "https://i.pravatar.cc/60?img=1",
      name: "Kerry Huster",
      position: "Electrician",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=2",
      name: "Rosalind Tranter",
      position: "Surveyor",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=3",
      name: "Xever Minocchi",
      position: "Construction Foreman",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=4",
      name: "Netta Hechlin",
      position: "Surveyor",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=5",
      name: "Florina Burborough",
      position: "Construction Expeditor",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=6",
      name: "Wanda Penniall",
      position: "Construction Expeditor",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=7",
      name: "Rick Ismirnioglou",
      position: "Subcontractor",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=8",
      name: "Giovanni Hunnicot",
      position: "Supervisor",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=9",
      name: "Hayes Swift",
      position: "Estimator",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
    {
      image: "https://i.pravatar.cc/60?img=10",
      name: "Ben Abramowsky",
      position: "Subcontractor",
      testimoni:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate eius voluptatibus cupiditate incidunt quibusdam voluptatum fugiat iure cumque velit sequi.",
    },
  ];
  return (
    <Carousel opts={{ loop: true }} className="w-8/12 sm:w-10/12">
      <CarouselContent>
        {testimoniItems.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square justify-center items-center p-6">
                  <div className="w-full">
                    <div className="flex flex-col justify-start items-center">
                      <div className="p-2">
                        <Image
                          alt="portofolio1"
                          src={item.image}
                          sizes="(max-width: 768px) 100vw, 33vw"
                          width={60}
                          height={60}
                          className="rounded-full"
                        />
                      </div>
                      <div className="p-3 text-center">
                        <h5 className="text-[17px] font-normal text-gray-800">
                          {item.name}
                        </h5>
                        <span className="text-rose-400 font-light">
                          {item.position}
                        </span>
                      </div>
                    </div>
                    <q className="text-[15px] font-normal p-1 text-gray-500 text-center">
                      {item.testimoni}
                    </q>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default CarouselTestimoni;
