import wikimap from "../images/wikimap.png";
import scheduler from "../images/scheduler.gif";
import tinyapp from "../images/tinyapp.png";
import jobdepot from "../images/jobdepot.png";

export default function Projects() {
  const projectData = [
    { name: "JobDepot", image: jobdepot },
    { name: "Wikimaps", image: wikimap },
    { name: "Scheduler", image: scheduler },
    { name: "Tinyapp", image: tinyapp },
  ];

  return (
    <div className="container py-16 md:py-20" id="projects">
      <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Projects
      </h2>
      <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>

      <div className="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {projectData.map((project, i) => (
          <a
          key={i}
            href="/"
            className="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src={project.image}
              className="w-full shadow"
              alt="portfolio"
            />
          </a>
        ))}
        
      </div>
    </div>
  );
}
