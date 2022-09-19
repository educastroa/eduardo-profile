import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { generateSocialIcons } from "../helpers";

export default function Footer() {
  const iconsData = [
    { name: FaGithub, link: "/" },
    { name: FaLinkedin, link: "/" },
    { name: FaEnvelope, link: "/" },
  ];

  return (
    <div className="bg-primary">
      <div className="container flex flex-col items-center	a py-6">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2022. All right reserved, Eduardo Castro.
        </p>
        <div className="flex items-center pt-5">
          {generateSocialIcons(iconsData, "white")}
        </div>
      </div>
    </div>
  );
}
