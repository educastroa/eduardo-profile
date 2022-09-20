import { AiOutlineRight } from "react-icons/ai";
import { generateSocialIcons } from "../helpers";
import { iconsData } from "../constants";

export default function About() {
  const skillData = [
    { name: "React", level: "75%" },
    { name: "Javascript", level: "80%" },
    { name: "Jquery", level: "70%" },
    { name: "HTML CSS", level: "85%" },
  ];

  return (
    <div className="bg-grey-50" id="about">
      <div className="container flex flex-col items-center py-16 md:py-20 lg:flex-row">
        <div className="w-full text-center sm:w-3/4 lg:w-3/5 lg:text-left">
          <h2 className="font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            Who am I?
          </h2>
          <h4 className="pt-6 font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            I'm Eduardo Castro, a Web Developer
          </h4>
          <p className="pt-6 font-body leading-relaxed text-grey-20">
            Full-stack web developer with strong teamwork and organisational
            skills. Ability in optimising user interface, testing and data
            retrieval to meet or exceed client needs. Solid Quality management
            experience in the automotive industry. Highly analytical
            problem-solving skills using methods to prevent errors, faults and
            create workable solutions developed over years of experience working
            in manufacturing and construction environment.
          </p>
          <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
            <div className="flex items-center justify-center sm:justify-start">
              <p className="font-body text-lg font-semibold uppercase text-grey-20">
                Connect with me
              </p>
              <div className="hidden sm:block">
                <AiOutlineRight className="bx bx-chevron-right text-2xl text-primary" />
              </div>
            </div>
            <div className="flex items-center justify-center pt-5 pr-4 sm:justify-start sm:pt-0">
              {generateSocialIcons(iconsData, "primary")}
            </div>
          </div>
        </div>
        <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
          {skillData.map((skill, i) => (
            <div key={i}>
              <div className="flex items-end justify-between">
                <h4 className="font-body font-semibold uppercase text-black">
                  {skill.name}
                </h4>
                <h3 className="font-body text-3xl font-bold text-primary">
                  {skill.level}
                </h3>
              </div>
              <div className="mt-2 h-3 w-full rounded-full bg-lila">
                <div
                  className={`h-3 rounded-full bg-primary`}
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
