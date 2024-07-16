import short_img from "../assets/shortener.png";
import pass_img from "../assets/password-generator.png";

export const Projects = () => {
  return (
    <div className="flex-grow flex flex-col mt-28 items-center">
      <h1 className="text-military-green font-bold text-3xl font-mono">
        My Projects
      </h1>
      <div className="flex gap-10 mt-10 w-full justify-center">
        <a
          href="https://shortener-ar.vercel.app"
          className="border text-center rounded-lg p-5 w-1/4 font-mono font-bold flex flex-col items-center cursor-pointer transition-all duration-300 hover:border-none hover:scale-105 hover:bg-military-green hover:text-white"
        >
          <img src={short_img} className="w-72 rounded-md" alt="" />
          <h2 className="text-2xl pt-4 font-bolder">Shortener</h2>
          <p>
            Shortener is a URL shortener where you can manage, delete, and track
            the traffic of your shortened URLs.
          </p>
        </a>
        <a
          href="https://password-generator-ar.vercel.app"
          className="border text-center rounded-lg p-5 w-1/4 font-mono font-bold flex flex-col items-center cursor-pointer transition-all duration-300 hover:border-none hover:scale-105 hover:bg-military-green hover:text-white"
        >
          <img src={pass_img} className="w-72 rounded-md" alt="" />
          <h2 className="text-2xl pt-4 font-bolder">Password Generator</h2>
          <p>
            Password Generator is a random password generator where you can
            generate passwords according to your preferences. If you register,
            you can save, delete, and organize your passwords.
          </p>
        </a>
      </div>
    </div>
  );
};
