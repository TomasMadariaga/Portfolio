import { FaHtml5, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNestjs, SiTypescript, SiExpress } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { DownloadButtonEnglish, DownloadButtonSpanish } from "./Buttons";

export const About = () => {
  return (
    <div className="mt-24 flex flex-col flex-grow text-2xl">
      <div className="ml-20 flex w-2/3 flex-col gap-6 mb-24">
        <h1 className="text-military-green font-bold text-4xl font-mono">
          Get to know me a little better
        </h1>
        <p>
          Hello, I'm{" "}
          <span className="text-military-green font-bold font-mono">
            Tomas Madariaga
          </span>
          , a 22-year-old{" "}
          <span className="text-military-green font-bold font-mono">
            Full Stack developer
          </span>{" "}
          from Coronel Dorrego, Argentina, graduated in December 2023 from
          CEPIT. I'm passionate about web development, especially in the{" "}
          <span className="text-military-green font-bold font-mono">
            Back-End
          </span>
          , and I'm always seeking to learn new technologies.
        </p>
        <p>
          I enjoy working on group projects, and my goal is to contribute
          significant value to a company.
        </p>
        <p>
          <span className="text-military-green font-bold font-mono">
            I'm open to all kinds of projects
          </span>{" "}
          or roles where I can apply my skills, and{" "}
          <span className="text-military-green font-bold font-mono">
            I'm available full-time
          </span>{" "}
          to take on new challenges and contribute effectively.
        </p>
        <div className="flex gap-5 mt-8">
          <DownloadButtonSpanish />
          <DownloadButtonEnglish />
        </div>
      </div>
      <div className="flex flex-col justify-center m-auto mb-24">
        <h2 className="text-center text-3xl text-military-green font-bold mb-10 font-mono">
          Skills
        </h2>
        <div className="grid grid-cols-5 text-6xl">
          <div
            title="HTML"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <FaHtml5 />
          </div>
          <div
            title="CSS"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <IoLogoCss3 />
          </div>
          <div
            title="Tailwind"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <RiTailwindCssFill />
          </div>
          <div
            title="Javascript"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <IoLogoJavascript />
          </div>
          <div
            title="Typescript"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <SiTypescript />
          </div>
          <div
            title="React"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <FaReact />
          </div>
          <div
            title="Node.js"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <FaNodeJs />
          </div>
          <div
            title="Express"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <SiExpress />
          </div>
          <div
            title="NestJs"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <SiNestjs />
          </div>
          <div
            title="MySQL"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <GrMysql />
          </div>
          <div
            title="Git"
            className="p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <FaGitAlt />
          </div>
          <div
            title="GitHub"
            className="col-start-5 p-16 m-5 border rounded-xl transition-all duration-500 hover:bg-military-green hover:scale-125 hover:border-none"
          >
            <FaGithub />
          </div>
        </div>
      </div>
    </div>
  );
};
