import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import Link from "next/link";

const PrivacyAndPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container p-6 bg-black shadow-lg rounded-lg my-10 sm:mx-4 md:mx-12 lg:mx-24 mt-32">
      <div className="m-6 sm:m-8 md:m-10 lg:m-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          <TextGenerateEffect
            words="Privacy and Policy for StockED"
            className="text-[30px] sm:text-[35px] md:text-5xl"
          />
        </h1>
      </div>
      <div className="m-6 sm:m-8 md:m-10 lg:m-12">
        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 underline">
            Introduction
          </h2>
          <p className="text-gray-300 mb-4">
            This Privacy Policy outlines how StockEd Trading Company
            (&quot;We,&quot; &quot;Us,&quot; or &quot;Our&quot;) collects, uses,
            and discloses your personal information when you use our services,
            and the choices you have associated with that data. We are committed
            to protecting your privacy and ensuring your trust.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 underline">
            Information We Collect
          </h2>
          <p className="text-gray-300 mb-4">
            We collect various types of information for different purposes to
            provide you with the best possible experience using our services.
            This includes:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>
              <strong>Personal Data:</strong> Images, email address, first and
              last name, phone number.
            </li>
            <li>
              <strong>Usage Data:</strong> Device identifiers, information about
              your visit, location information, phonebook data, and
              camera/photos library information.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 underline">
            How We Use Your Information
          </h2>
          <p className="text-gray-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>Provide and maintain our services.</li>
            <li>Manage your account.</li>
            <li>
              Communicate with you about updates, promotions, and other relevant
              information.
            </li>
            <li>Analyze usage trends and improve our services.</li>
            <li>Comply with legal requirements.</li>
          </ul>
        </section>

        {/* Similar changes for other sections */}

        <section className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 underline">
            Contact Us
          </h2>
          <p className="text-gray-300 mb-4">
            <p>
              If you have any questions about this Privacy Policy, please
              contact us by email at
            </p>

            <a
              href="mailto:stock.ed.trading@gmail.com"
              className="text-sm text-white hover:underline cursor-pointer font-extrabold"
            >
              stock.ed.trading@gmail.com
            </a>
          </p>
          <p className="text-gray-300 mb-4">You can also reach us at:</p>
          <p className="text-gray-300 mb-4">
            65/1428-E, E1, E3, E4, 4TH FLOOR, MW1 CALICUT,
            <br />
            KANNANKANDY MANSION, BILATHIKULAM,
            <br />
            Nadakavu, Kozhikode, Kozhikode, Kerala, India, 673011
          </p>
          <p className="text-gray-300 mb-4">
            Phone:{" "}
            <a
              href="tel:+919037713791"
              className="text-sm text-white hover:underline cursor-pointer font-extrabold"
            >
              +91 90377 13791
            </a>
          </p>
        </section>

        {/* Footer */}
        <div className="flex flex-col items-center relative mt-10">
          <h1 className="heading text-lg sm:text-2xl lg:text-3xl text-center lg:max-w-[45vw]">
            Let&apos;s elevate your digital presence with
            <span className="text-purple"> Stock-ED</span> Trading Company
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center">
            Contact us today at StockEd Trading Company to explore how we can
            help you achieve your goals.
          </p>
          <a
            href="https://wa.me/919037713791?text=hi%20I%20want%20to%20work%20with%20you"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us via WhatsApp"
          >
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>

        <div className="flex mt-16 flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base font-light">
            Copyright © 2024 STOCK-ED TRADING
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy">
              <span className="text-sm text-white hover:underline cursor-pointer">
                Privacy Policy
              </span>
            </Link>
            <Link href="/terms-and-conditions">
              <span className="text-sm text-white hover:underline cursor-pointer">
                Terms and Conditions
              </span>
            </Link>
            <Link href="/return-and-refund">
              <span className="text-sm text-white hover:underline cursor-pointer">
                Return and Refund
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
