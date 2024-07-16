import Typewriter from "typewriter-effect";

export const TypeWriter = () => {
  return (
    <div className="font-bold text-3xl tracking-wider">
      <Typewriter
        options={{
          strings: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
          autoStart: true,
          loop: true,
          delay: 70,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};
