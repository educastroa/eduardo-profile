import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { AiOutlineRight } from 'react-icons/ai'

export default function About() {
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <div className="flex flex-col justify-center pt-6 sm:flex-row lg:justify-start">
        <div className="flex items-center justify-center sm:justify-start">
          <p className="font-body text-lg font-semibold uppercase text-grey-20">
            Connect with me
          </p>
          <div className="hidden sm:block">
            <AiOutlineRight className="bx bx-chevron-right text-2xl text-primary"/>
          </div>
        </div>
        <div className="flex items-center justify-center pt-5 pl-2 sm:justify-start sm:pt-0">
          <a href="/">
            <FaGithub className="text-2xl text-primary hover:text-yellow"/>
          </a>
          <a href="/" className="pl-4">
            <FaLinkedin className="text-2xl text-primary hover:text-yellow"/>
          </a>
          <a href="#contact" className="pl-4">
            <FaEnvelope className="text-2xl text-primary hover:text-yellow"/>
          </a>
        </div>
      </div>
    </div>
    <div className="w-full pl-0 pt-10 sm:w-3/4 lg:w-2/5 lg:pl-12 lg:pt-0">
      <div>
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">
            HTML &amp; CSS
          </h4>
          <h3 className="font-body text-3xl font-bold text-primary">85%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary w-[85%]"></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">React</h4>
          <h3 className="font-body text-3xl font-bold text-primary">70%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary w-[85%]" ></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">
            Javascript
          </h4>
          <h3 className="font-body text-3xl font-bold text-primary">98%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary w-[90%]"></div>
        </div>
      </div>
      <div className="pt-6">
        <div className="flex items-end justify-between">
          <h4 className="font-body font-semibold uppercase text-black">Jquery</h4>
          <h3 className="font-body text-3xl font-bold text-primary">91%</h3>
        </div>
        <div className="mt-2 h-3 w-full rounded-full bg-lila">
          <div className="h-3 rounded-full bg-primary w-[70%]"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
