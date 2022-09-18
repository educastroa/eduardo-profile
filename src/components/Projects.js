import jobDepot from "../images/JobSearch.png";
import wikimaps from "../images/wikimaps.png";
import scheduler from "../images/scheduler.gif";
import tinyapp from "../images/tinyapp.png";

export default function Projects() {
  const projectData = [
    { name: "JobDepot", image: jobDepot },
    { name: "Wikimaps", image: wikimaps },
    { name: "Scheduler", image: scheduler },
    { name: "Tinyapp", image: tinyapp },
  ];

  return (
    <div class="container py-16 md:py-20" id="portfolio">
      <h2 class="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
        Check out my Projects
      </h2>
      <h3 class="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
        Here's what I have done with the past
      </h3>

      <div class="mx-auto grid w-full grid-cols-1 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
        {projectData.map((project) => (
          <a
            href="/"
            class="mx-auto transform transition-all hover:scale-105 md:mx-0"
          >
            <img
              src={project.image}
              class="w-full shadow"
              alt="portfolio"
            />
          </a>
        ))}
        
      </div>
    </div>
  );
}
