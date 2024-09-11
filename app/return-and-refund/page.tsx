import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import Link from "next/link";

const ReturnAndRefund: React.FC = () => {
  return (
    <div className="return-and-refund-container p-6 bg-black shadow-lg rounded-lg my-10 mx-24 mt-32">
      <div className="m-12">
        <h1 className="text-5xl font-bold mb-6">
          <TextGenerateEffect
            words="Return and Refund for StockED"
            className="text-[40px] md:text-5xl"
          />
        </h1>
      </div>
      <div className="m-12">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            1. Cancellation by the User
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>Requesting Cancellation:</strong> You may request to cancel
            your registration by contacting us at least 14 days before the
            course start date. To initiate a cancellation, please email us at{" "}
            <a
              href="mailto:stockedtrading@gmail.com"
              className="text-sm text-white hover:underline cursor-pointer font-extrabold"
            >
              stockedtrading@gmail.com
            </a>
            .
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Refund Eligibility:</strong> If you cancel your registration
            at least 14 days before the course start date, you will receive a
            full refund minus a processing fee of 5,000. If you cancel within 14
            days of the course start date, you will not be eligible for a
            refund.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Transfer Option:</strong> If you are unable to attend the
            course, you may transfer your registration to another person,
            provided you notify us at least 7 days before the course start date.
            The new participant must meet all course eligibility requirements
            and consent to these Terms and Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            2. Cancellation by StockED Trading
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>Course Cancellation:</strong> StockED Trading reserves the
            right to cancel a course due to insufficient enrollment or other
            unforeseen circumstances. If we cancel a course, you will receive a
            full refund of the course fee.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Rescheduling:</strong> If a course is rescheduled, you will
            be offered the option to transfer your registration to the new
            course date or receive a refund of the course fee.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            3. Non-Refundable Fees
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>Processing Fee:</strong> A processing fee of 5,000 is
            non-refundable regardless of the timing of your cancellation.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Materials and Resources:</strong> Any materials or resources
            provided as part of the course are non-refundable once they have
            been dispatched.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            4. Refund Process
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>Processing Time:</strong> Refunds will be processed within
            14 business days of receiving your cancellation request. The refund
            will be issued to the original payment method.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Administrative Costs:</strong> Any administrative or
            processing costs incurred by StockED Trading in connection with your
            cancellation will be deducted from your refund.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 underline">
            5. Exceptional Circumstances
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>Medical or Emergency Situations:</strong> In cases of
            medical emergencies or other exceptional circumstances, please
            contact us as soon as possible. We will review each case
            individually and may offer a partial refund or reschedule based on
            the circumstances.
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
        {/* footer */}
      </div>
    </div>
  );
};

export default ReturnAndRefund;
