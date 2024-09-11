import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import Link from "next/link";

const PrivacyAndPolicy: React.FC = () => {
  return (
    <div className="privacy-policy-container p-6 bg-black shadow-lg rounded-lg my-10 mx-24 mt-32">
      <div className="m-12">
        <h1 className="text-5xl font-bold mb-6">
          <TextGenerateEffect
            words="Privacy and Policy for StockED"
            className="text-[40px] md:text-5xl"
          />
        </h1>
      </div>
      <div className="m-12">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
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
          <h2 className="text-2xl font-semibold mb-4 underline">
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
          <h2 className="text-2xl font-semibold mb-4 underline">
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

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            Sharing Your Information
          </h2>
          <p className="text-gray-300 mb-4">
            We may share your information with third-party service providers who
            assist us in operating our services. We will only share your
            information with companies that have implemented appropriate
            safeguards to protect your privacy.
          </p>
          <p className="text-gray-300 mb-4 font-bold underline">
            We may also disclose your information:
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>In connection with a merger, acquisition, or asset sale.</li>
            <li>
              With law enforcement or other government agencies when required by
              law.
            </li>
            <li>To protect the rights or safety of ourselves or others.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            Data Retention
          </h2>
          <p className="text-gray-300 mb-4">
            We will retain your personal data only for as long as necessary for
            the purposes outlined in this Privacy Policy. We may retain usage
            data for longer periods for internal analysis purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            Transfer of Your Information
          </h2>
          <p className="text-gray-300 mb-4">
            Your information may be transferred to and processed in countries
            other than your own. By using our services, you consent to this
            transfer.
          </p>
          <ul className="list-disc list-inside text-gray-300 mb-4">
            <li>You can request access to your personal data.</li>
            <li>You can request to update or correct your personal data.</li>
            <li>You can request to delete your personal data.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            Children &lsquo s Privacy
          </h2>
          <p className="text-gray-300 mb-4">
            Our services are not directed to children under 13. We do not
            knowingly collect personal information from children under 13. If
            you are a parent or guardian and believe your child has provided us
            with personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            Links to Other Websites
          </h2>
          <p className="text-gray-300 mb-4">
            Our services may contain links to other websites not operated by us.
            We are not responsible for the privacy practices of any third-party
            sites.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            Changes to this Privacy Policy
          </h2>
          <p className="text-gray-300 mb-4">
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">Contact Us</h2>
          <p className="text-gray-300 mb-4">
            If you have any questions about this Privacy Policy, please contact
            us by email at
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
            Nadakavu, Kozhikode, Kozhikode, Kerala,
            <br />
            India, 673011
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
        <div className="flex flex-col items-center relative">
          <h1 className="heading lg:max-w-[45vw] text-center">
            Let&apos;s elevate your digital presence with
            <span className="text-purple"> Stock-ED</span> Trading Company?
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

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2024 STOCK-ED TRADING
          </p>
          <div className="flex items-center gap-6">
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
