"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { Button } from "./ui/MovingBorders"; // Import Button
import Link from "next/link"; // Import Link

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading mb-4">
        {" "}
        {/* Adjusted margin-bottom */}WHY LEARN WITH{" "}
        <span className="text-purple">STOCK-ED TRADING</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            <PinContainer>
              <div className="relative flex flex-col items-center justify-center sm:w-96 w-[80vw] p-4 h-full">
                <div className="text-center">
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base">
                    {item.title}
                  </h1>

                  <p
                    className="lg:text-xl lg:font-normal font-light text-sm mt-4"
                    style={{
                      color: "#BEC1DD",
                    }}
                  >
                    {item.des}
                  </p>
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>

      {/* Center the Explore Our Course Button */}
      <div className="flex justify-center mt-10">
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
          {/* Updated Link */}
          <Link
            href="/pro-trading-programme" // Updated link to redirect to the course details page
            className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"
          >
            <h1 className="text-start text-xl md:text-2xl font-bold text-white">
              Explore Our Course
            </h1>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RecentProjects;
