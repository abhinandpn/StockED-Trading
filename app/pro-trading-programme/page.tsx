import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "./MagicButton";

import Link from "next/link";

// Import the new image
import Image from "next/image";
import proTradingImage from "@/public/pro-trading-programme.png"; // Update with the correct path if necessary

// Import Button component
import { Button } from "./ui/MovingBorders";

const ProTradingProgramme: React.FC = () => {
  return (
    <div className="p-6 bg-black shadow-lg rounded-lg mx-auto mt-10 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
      {/* Hero Section with Image */}
      <div className="relative w-full h-96 mb-8">
        <Image
          src={proTradingImage}
          alt="Pro Trading Programme"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>

      <div className="m-4 md:m-8 lg:m-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          <TextGenerateEffect
            words="PRO-TRADING PROGRAMME"
            className="text-2xl md:text-3xl lg:text-4xl"
          />
        </h1>

        <p className="text-center text-lg md:text-xl lg:text-2xl mb-4 text-gray-300">
          Master the Market with Our Expert Trading Guidance!
        </p>
      </div>

      {/* Programme Contents */}
      <div className="m-4 md:m-8 lg:m-12">
        <section className="mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            What You Will Learn
          </h2>
          <ul className="list-disc text-gray-300 ml-4 space-y-2">
            <li>Basics of Stock Market</li>
            <li>Demand and Supply</li>
            <li>Market Trend and Structures</li>
            <li>Liquidity and Institutional Price Action</li>
            <li>Intraday Equity Trading & Options Trading</li>
            <li>Money Management & Trading Psychology</li>
            <li>5-year Trading Plan</li>
          </ul>
        </section>

        {/* Programme Benefits */}
        <section className="mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white">
            Exclusive Benefits
          </h2>
          <ul className="list-disc text-gray-300 ml-4 space-y-2">
            <li>Access to a Premium Trading Community</li>
            <li>Live Chart Updates and Market Assistance</li>
            <li>Individual Performance Tracking</li>
            <li>Forex Sessions & Investment Insights (Add-ons)</li>
          </ul>
        </section>

        {/* Limited Time Offer */}
        <div className="bg-purple-600 p-6 text-white rounded-md text-center mb-6">
          <h3 className="text-xl font-bold">Limited Time Offer!</h3>
          <p>
            Get 10% off your enrollment. Offer valid for the first 100 sign-ups!
          </p>
        </div>

        {/* Buy Now Button */}
        <div className="flex justify-center mt-8">
          <Button
            duration={10000} // Example duration
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <Link
              href="/buy-now"
              className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2"
            >
              <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                Buy Now
              </h1>
            </Link>
          </Button>
        </div>

        {/* Footer Section */}
        <div className="flex flex-col items-center text-center mb-12 mt-12">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-gray-200">
            Join the Pro Traders Community with{" "}
            <span className="text-purple">Stock-ED Trading</span>
          </h1>
          <p className="text-gray-400 md:mt-4 mb-4">
            Start Your Journey Today!
          </p>

          <MagicButton
            title="Let's Get in Touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>

        {/* Footer Final */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm md:text-base font-light mb-4 md:mb-0">
            Copyright © 2024 STOCK-ED TRADING
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-white hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-sm text-white hover:underline"
            >
              Terms and Conditions
            </Link>
            <Link
              href="/return-and-refund"
              className="text-sm text-white hover:underline"
            >
              Return and Refund
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProTradingProgramme;
