import profile from "./images/profile-picture.png";

export default function About() {
  return (
    <div id="about" className="flex justify-center items-center xs:flex-col md:flex-row p-5">
      <div className="mb-4 p-5">
        <img
          src={profile}
          className="object-scale-down w-72	rounded-full"
          alt="Profile"
        />
      </div>
      <div className="bg-blue-200 shadow-lg shadow-blue-300 p-5 rounded-lg w-[60%]">
        <strong>About Me</strong>
        <p>
          Full-stack web developer with strong teamwork and organisational
          skills. Ability in optimising user interface, testing and data
          retrieval to meet or exceed client needs. Solid Quality management
          experience in the automotive industry. Highly analytical
          problem-solving skills using methods to prevent errors, faults and
          create workable solutions developed over years of experience working
          in manufacturing and construction environment
        </p>
      </div>
    </div>
  );
}
