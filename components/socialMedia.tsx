import { SociallMediaItems } from "@/types/types";
import Link from "next/link";
import { IoLogoDribbble, IoLogoRss } from "react-icons/io5";
import {
  RiFacebookFill,
  RiInstagramLine,
  RiLinkedinFill,
} from "react-icons/ri";

const SocialMedia = () => {
  const socialMediaItems: SociallMediaItems[] = [
    {
      name: "facebook",
      link: "#",
      icon: <RiFacebookFill />,
    },
    {
      name: "instagram",
      link: "#",
      icon: <RiInstagramLine />,
    },
    {
      name: "linkedin",
      link: "#",
      icon: <RiLinkedinFill />,
    },
    {
      name: "rss",
      link: "#",
      icon: <IoLogoRss />,
    },
    {
      name: "dribble",
      link: "#",
      icon: <IoLogoDribbble />,
    },
  ];
  return (
    <ul className="flex justify-center items-center gap-6 text-white list-none">
      {socialMediaItems.map((socialMedia) => {
        const { name, link, icon } = socialMedia;
        return (
          <li key={name} className="list-item box-border border-2 p-3 rounded-full hover:bg-white hover:text-purple-500">
            <Link href={link} className="font-light text-[24px]">
              {icon}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default SocialMedia;
