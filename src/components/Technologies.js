import javascriptLogo from "../images/javascript-logo.png";
import cssLogo from "../images/css-logo.png";
import htmlLogo from "../images/html-logo.png";
import tailwindlLogo from "../images/tailwind-logo.png";
import jqueryLogo from "../images/jquery-logo.png";
import reactLogo from "../images/react-logo.png";
import nodeLogo from "../images/node-logo.png";
import sqlLogo from "../images/sql-logo.png";
import rubyLogo from "../images/ruby-logo.png";
import bootstrapLogo from "../images/bootstrap-logo.png";

export default function Technologies() {
  const logoData = [
    { name: "React.js", image: reactLogo },
    { name: "JavaScript", image: javascriptLogo },
    { name: "JQuery", image: jqueryLogo },
    { name: "Node.js", image: nodeLogo },
    { name: "Ruby", image: rubyLogo },
    { name: "SQL", image: sqlLogo },
    { name: "HTML", image: htmlLogo },
    { name: "CSS", image: cssLogo },
    { name: "Tailwind", image: tailwindlLogo },
    { name: "Bootstrap", image: bootstrapLogo },
  ];

  return (
    <div className="container py-16 md:py-20" id="services">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        These are the technologies I work
      </h2>
      <div className="grid grid-cols-2 gap-6 pt-10 md:gap-10 md:pt-12 lg:grid-cols-5">
        {logoData.map((logo, i) => (
          <div key={i} className="group rounded px-8 py-6 shadow hover:bg-primary">
            <div className="mx-auto flex items-center justify-between h-24 w-24 text-center xl:h-28 xl:w-28">
              <div className="hidden group-hover:block">
                <img src={logo.image} alt="react" />
              </div>
              <div className="block group-hover:hidden">
                <img src={logo.image} alt="react" />
              </div>
            </div>
            <div className="text-center">
              <h3 className="pt-8 text-lg font-semibold uppercase text-primary group-hover:text-yellow lg:text-xl">
                {logo.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
