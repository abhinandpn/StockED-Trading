import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import Link from "next/link";


const TermsAndConditions: React.FC = () => {
  return (
    <div className="terms-conditions-container p-6 bg-black shadow-lg rounded-lg my-10 mx-24 mt-32">
      <div className="m-12">
        <h1 className="text-5xl font-bold mb-6">
          <TextGenerateEffect
            words="Terms and Conditions for StockED"
            className="text-[40px] md:text-5xl"
          />
        </h1>
      </div>
      <div className="m-12">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            1. Modification of the Terms
          </h2>
          <p className="text-gray-300 mb-4">
            StockED Trading Company (&quot;We,&quot; &quot;Us,&quot; or
            &quot;Our&quot;) reserves the right to modify these Terms and
            Conditions at any time without prior notice. Any changes will be
            effective upon posting on the StockED Trading website. By continuing
            to use the Service after such changes are posted, you agree to be
            bound by the modified terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            2. Registration and Eligibility
          </h2>
          <p className="text-gray-300 mb-4">
            To become a Member, you must be at least 13 years old and invited by
            a StockED Trading board member after completing the full
            registration fee.
          </p>
          <p className="text-gray-300 mb-4">
            You are responsible for safeguarding your username, password, and
            account information. Any unauthorized use of your account is your
            responsibility.
          </p>
          <p className="text-gray-300 mb-4">
            You agree to provide accurate and up-to-date registration
            information. False or misleading information may result in the
            termination of your membership.
          </p>
          <p className="text-gray-300 mb-4">
            Membership is valid for 6 months after completing registration.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            3. Termination and Cancellation
          </h2>
          <p className="text-gray-300 mb-4">
            StockED Trading Company may terminate or suspend your access to the
            Service if you violate these Terms and Conditions.
          </p>
          <p className="text-gray-300 mb-4">
            Membership will be immediately terminated if you are found to be
            part of a competing community or business in the same niche.
          </p>
          <p className="text-gray-300 mb-4">
            Inactivity for more than 2 weeks without prior notice may result in
            permanent cancellation of membership.
          </p>
          <p className="text-gray-300 mb-4">
            Any behavior that spreads hatred or negativity will result in a
            permanent ban. The decision of the trainers will be final.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Content</h2>
          <p className="text-gray-300 mb-4">
            The syllabus is taught in phases. Completion of one phase is
            required to start the next.
          </p>
          <p className="text-gray-300 mb-4">
            Assignments are mandatory for completing a phase.
          </p>
          <p className="text-gray-300 mb-4">
            Access to the StockED Trading Community will only be granted if you
            pass the eligibility phase, with the trainer&apos;s decision being
            final.
          </p>
          <p className="text-gray-300 mb-4">
            Community access will be free for 6 months after fee payment. An
            annual maintenance charge (AMC) will apply afterward.
          </p>
          <p className="text-gray-300 mb-4">
            StockED Trading may discontinue any services with short notice.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            5. Payment and Refund Policy
          </h2>
          <p className="text-gray-300 mb-4">
            Full payment is required to complete registration. Partial payments
            will not grant program membership.
          </p>
          <p className="text-gray-300 mb-4">
            Services will be discontinued for any pending payments and will be
            reinstated upon payment clearance.
          </p>
          <p className="text-gray-300 mb-4">
            All fees paid are non-refundable. However, you may transfer the
            booking to another person with the consent of the respective
            trainers.
          </p>
          <p className="text-gray-300 mb-4">
            Any unauthorized fee collection between members will be considered
            an offense and subject to legal action.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">
            6. Acceptance of Terms
          </h2>
          <p className="text-gray-300 mb-4">
            By using StockED Trading, you agree to these Terms and Conditions.
            StockED Trading reserves the right to alter these Terms at any time
            without notice. Continued use of the Service after changes are
            posted will constitute your acceptance of those changes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Use of the Service</h2>
          <p className="text-gray-300 mb-4">
            Users must be at least 13 years old to utilize the service. Any
            unauthorized or prohibited use of the Service is forbidden under
            these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Abuse</h2>
          <p className="text-gray-300 mb-4">
            StockED Trading Company prohibits objectionable content and abusive
            behavior. You agree not to use the Service to transmit any content
            that is offensive, abusive, harassing, threatening, or
            inappropriate. You also agree not to use the Service to transmit any
            content that violates the intellectual property rights of others.
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
        {/* next footer final */}
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
      </div>
    </div>
  );
};

export default TermsAndConditions;
