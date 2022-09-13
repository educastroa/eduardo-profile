import JobDepot from "./images/JobSearch.png";

export default function Projects() {
  return (
    <div id="projects" className="flex flex-col items-center p-20">
      <h1 className="text-2xl p-10">Projects</h1>
    <div  className="flex items-center bg-blue-200 shadow-lg shadow-blue-300 flex-col py-10">
      
      
      <div className="flex justify-center py-10">
        <div className="flex justify-center shadow-2xl shadow-blue-900 rounded-lg w-[80%]">
          <div className="p-5">
            <strong>
              JobDepot
              <hr />
            </strong>
            <p>
              - A single page web app designed to allow users to look for job
              postings throughout several different websites (LinkedIn, Indeed,
              Glassdoor, ZipRecruiter and others) using one single app.
            </p>
          </div>
          <div className="min-w-fit p-5">
            <strong>
              Tech Stack
              <hr />
            </strong>
            <p>
              -React.js
              <br />
              -Node/Express
              <br />
              -Bootstrap
              <br />
              -PostgreSQL
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          src={JobDepot}
          className="shadow-2xl shadow-blue-900 rounded-lg w-[80%] p-5 "
          alt="jobSearch"
        />
      </div>
    </div>
    </div>
  );
}
