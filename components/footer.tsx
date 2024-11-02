import SocialMedia from "./socialMedia";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `linear-gradient(76deg, rgba(148, 21, 61, 0.493), rgba(101, 62, 209, 0.911))`,
      }}
      className="flex justify-center items-center"
    >
      <div className="container text-center px-6">
        <div className="py-8">
          <SocialMedia />
        </div>
        <hr />
        <p className="uppercase text-base p-8 text-white tracking-wide">
          Copyright © {new Date().getFullYear()} | TechWave
        </p>
      </div>
    </footer>
  );
};
export default Footer;
