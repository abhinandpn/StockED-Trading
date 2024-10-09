import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { Button } from "./ui/MovingBorders"; // Import Button

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* Spotlights */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Grid Background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Main Content */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Let&apos;s make it simple
          </p>

          {/* Dynamic Text Effect */}
          <TextGenerateEffect
            words="Secure and Trusted Trading Making Your Dreams Come True!"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            At StockEd Trading, we guide you from the basics to the expert level, ensuring you acquire the skills needed for profitable trading. Our comprehensive program covers advanced strategies and essential tips for succeeding in Equity and FnO within the Indian market. More than just a course, we empower you to excel and thrive in your trading journey.
          </p>

          {/* Join with Us Button */}
          <a href="https://forms.gle/K7hgJoGAZtP7LbZY6" target="_blank">
            <MagicButton
              title="Join with US"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          {/* Explore Our Course Button with Card Style
          <div className="mt-10">
            <Button
              duration={10000} // Use a random duration if needed
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
              <a
                href="#course-section" // Add anchor link to the course section
                className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"
              >
                <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                  Explore Our Course
                </h1>
              </a>
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
