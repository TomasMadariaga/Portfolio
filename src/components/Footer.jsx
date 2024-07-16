import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex justify-evenly">
      <h2 className="text-xl font-mono font-bold">Tomas Madariaga</h2>
      <ul className="flex gap-10">
        <li className="text-3xl transition-all duration-300 hover:scale-150 hover:text-military-green">
          <a href="https://www.linkedin.com/in/tomas-madariaga-b8580725b/">
            <FaLinkedin />
          </a>
        </li>
        <li className="text-3xl transition-all duration-300 hover:scale-150 hover:text-military-green">
          <a href="https://github.com/TomasMadariaga">
            <FaGithub />
          </a>
        </li>
      </ul>
    </footer>
  );
};
