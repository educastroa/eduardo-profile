import arcelorLogo from "../images/arcelor-logo.png";
import oecLogo from "../images/oec-logo.png";

export default function WorkExperience() {
  return (
    <div>
      <div className="container py-16 md:py-20" id="experience">
        <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
          My work experience
        </h2>
        <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
          Here's what I did before Web Development
        </h3>

        <div className="relative mx-auto mt-12 flex w-full flex-col lg:w-2/3">
          <span className="left-2/5 absolute inset-y-0 ml-10 hidden w-0.5 bg-grey-40 md:block"></span>

          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img
                    src={arcelorLogo}
                    className="h-auto w-32"
                    alt="company logo"
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      Jul 2021 - Apr 2022
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Regional Quality Manager
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        Responsible for continuous improvement in all Canadian
                        facilities by collecting and analysing data using state
                        of art technology
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img
                    src={arcelorLogo}
                    className="h-auto w-32"
                    alt="company logo"
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      Feb 2019 - Jul 2021
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Senior Quality Engineer
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        Led problem solving processes using the most advanced
                        techniques world wide ensuring collaboration between
                        departments
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-col text-center md:flex-row md:text-left">
            <div className="md:w-2/5">
              <div className="flex justify-center md:justify-start">
                <span className="shrink-0">
                  <img
                    src={oecLogo}
                    className="h-auto w-32"
                    alt="company logo"
                  />
                </span>
                <div className="relative ml-3 hidden w-full md:block">
                  <span className="absolute inset-x-0 top-1/2 h-0.5 -translate-y-1/2 transform bg-grey-70"></span>
                </div>
              </div>
            </div>
            <div className="md:w-3/5">
              <div className="relative flex md:pl-18">
                <span className="absolute left-8 top-1 hidden h-4 w-4 rounded-full border-2 border-grey-40 bg-white md:block"></span>

                <div className="mt-1 flex">
                  <i className="bx bxs-right-arrow hidden text-primary md:block"></i>
                  <div className="md:-mt-1 md:pl-8">
                    <span className="block font-body font-bold text-grey-40">
                      Mar 2013 - Jan 2016
                    </span>
                    <span className="block pt-2 font-header text-xl font-bold uppercase text-primary">
                      Civil Engineer
                    </span>
                    <div className="pt-2">
                      <span className="block font-body text-black">
                        Managed construction processes using creative solutions
                        to meet projects' deadline in the Athletes Village for
                        the Olympics 2016
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-experience bg-cover bg-top bg-no-repeat pb-16 md:py-16 lg:py-24"></div>
    </div>
  );
}
