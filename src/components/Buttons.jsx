import { Link } from "react-router-dom";
import { MdPersonOutline, MdOutlineMailOutline } from "react-icons/md";
import { FaFileDownload } from "react-icons/fa";

export const AboutButton = () => {
  return (
    <Link
      className="flex bg-military-green w-fit px-5 gap-3 py-1 rounded-lg mt-5 transition-all duration-300 hover:bg-white hover:text-military-green"
      to="/about"
    >
      <button className="text-base">About me</button>
      <MdPersonOutline />
    </Link>
  );
};

export const ContactButton = () => {
  return (
    <Link
      className="flex bg-military-green w-fit px-5 gap-3 py-1 rounded-lg mt-5 transition-all duration-300 hover:bg-white hover:text-military-green"
      to="/contact"
    >
      <button className="text-base">Contact me</button>
      <MdOutlineMailOutline />
    </Link>
  );
};

export const SubmitButton = () => {
  return (
    <button
      type="submit"
      className="bg-military-green gap-3 px-5 py-3 w-full font-bold rounded-lg mt-5 transition-all hover:bg-white hover:text-military-green"
    >
      Submit
    </button>
  );
};

export const DownloadButtonSpanish = () => {
  return (
    <a
      href="./cv-espanol.pdf"
      download="cv-espanol.pdf"
      className="bg-military-green flex items-center text-base gap-3 px-5 py-3 w-fit font-bold rounded-lg mt-5 transition-all hover:bg-white hover:text-military-green"
    >
      Spanish CV
      <FaFileDownload className="scale-125" />
    </a>
  );
};

export const DownloadButtonEnglish = () => {
  return (
    <a
      href="./cv-english.pdf"
      download="cv-english.pdf"
      className="bg-military-green flex items-center text-base gap-3 px-5 py-3 w-fit font-bold rounded-lg mt-5 transition-all hover:bg-white hover:text-military-green"
    >
      English CV
      <FaFileDownload className="scale-125" />
    </a>
  );
};
