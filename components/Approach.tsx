import React from "react";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="YADHU DINESH"
          imageUrl="YADHUDINEESH.jpeg"
          socialLinks={[
            {
              platform: "Instagram",
              url: "https://www.instagram.com/yadhu_dinesh",
            },
            // { platform: "Twitter", url: "https://twitter.com/leader1" },
          ]}
          des=""
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="SUDHIN"
          imageUrl="SUDHIN.jpeg"
          socialLinks={[
            {
              platform: "Instagram",
              url: "https://www.instagram.com/sudhin_12",
            },
            // { platform: "Twitter", url: "https://twitter.com/leader2" },
          ]}
          des=""
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="VISHNU T T"
          imageUrl="VISHNUTT.jpeg"
          socialLinks={[
            {
              platform: "Instagram",
              url: "https://www.instagram.com/vishnu_tt_",
            },
            // { platform: "Twitter", url: "https://twitter.com/leader3" },
          ]}
          des=""
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

const Card = ({
  title,
  imageUrl,
  socialLinks,
  children,
  des,
}: {
  title: string;
  imageUrl: string;
  socialLinks: { platform: string; url: string }[];
  children?: React.ReactNode;
  des: string;
}) => {
  return (
    <div
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="absolute inset-0 h-full w-full">{children}</div>

      <div className="relative z-20 px-10 flex flex-col items-center">
        <div className="w-full aspect-w-16 aspect-h-9">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <h2
          className="dark:text-white text-center text-3xl
         relative z-10 text-black mt-4 font-bold transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm relative z-10 mt-4 text-center transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
        <div className="flex space-x-4 mt-4">
          {socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {link.platform}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return <div>{/* Placeholder for Phase button if needed */}</div>;
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
