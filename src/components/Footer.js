import { generateSocialIcons } from "../helpers";
import { iconsData } from "../constants";

export default function Footer() {

  return (
    <div className="bg-primary">
      <div className="container flex flex-col items-center	a py-6">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2022. All right reserved, Eduardo Castro.
        </p>
        <div className="flex items-center pt-5 pr-4">
          {generateSocialIcons(iconsData, "white")}
        </div>
      </div>
    </div>
  );
}
