"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

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
                {/* Remove image sections */}
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
    </div>
  );
};

export default RecentProjects;
