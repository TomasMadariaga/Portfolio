import { TypeWriter } from "./TypeWriter";
import IMG from "../assets/img-01.jpg";
import IMG_01 from "../assets/img-profile.jpeg"
import { AboutButton, ContactButton } from "./Buttons";

export const Home = () => {
  return (
    <div className="flex-grow mt-36">
      <div className="flex justify-evenly min-h-96 items-center">
        <div className="font-bold font-mono text-4xl">
          <h1>Hello there!</h1>
          <h1>
            Im <span className="text-military-green">Tomas Madariaga</span>
          </h1>
          <TypeWriter />
          <div className="font-sans flex gap-5">
            <AboutButton />
            <ContactButton />
          </div>
        </div>
        <img className="rounded-full w-96 h-96 object-cover select-none" src={IMG_01} />
      </div>
    </div>
  );
};
