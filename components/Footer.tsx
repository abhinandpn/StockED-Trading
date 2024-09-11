import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Background Grid */}
      <div className="absolute inset-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="Decorative grid background"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center relative">
        <h1 className="heading lg:max-w-[45vw] text-center">
          Let&apos;s elevate your digital presence with
          <span className="text-purple"> Stock-ED</span> Trading Company?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contact us today at StockEd Trading Company to explore how we can help
          you achieve your goals.
        </p>
        <a
          href="https://wa.me/919037713791?text=hai%20I%20want%20to%20work%20with%20you"
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

      {/* Developer Section */}
      <div className="mt-16 flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {socialMedia.map((info) => (
            <div key={info.id} className="flex flex-col items-center">
              <p className="text-sm font-medium text-white">{info.name}</p>
              <a
                href={info.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${info.name}`}
                className="w-10 h-10 cursor-pointer flex justify-center items-center mt-2 backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img src={info.img} alt={info.name} width={20} height={20} />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 STOCK-ED TRADING
        </p>

        {/* <div className="flex items-center md:gap-3 gap-6">
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
        </div> */}

        <div className="flex flex-col items-center relative">
          <Link href="/privacy-policy">
            <span className="text-sm text-white hover:underline cursor-pointer">
              Privacy-policy
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center relative">
          <Link href="/terms-and-conditions">
            <span className="text-sm text-white hover:underline cursor-pointer">
              Terms-and-conditions
            </span>
          </Link>
        </div>

        <div className="flex flex-col items-center relative">
          <Link href="/return-and-refund">
            <span className="text-sm text-white hover:underline cursor-pointer">
              Return and Refund
            </span>
          </Link>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;
