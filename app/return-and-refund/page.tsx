import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "./MagicButton";
import Link from "next/link";

const ReturnAndRefund: React.FC = () => {
  return (
    <div className="p-6 bg-black shadow-lg rounded-lg mx-auto mt-10 max-w-full sm:max-w-2xl md:max-w-4xl lg:max-w-7xl">
      <div className="m-4 md:m-8 lg:m-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
          <TextGenerateEffect
            words="Return and Refund Policy for StockED"
            className="text-2xl md:text-3xl lg:text-4xl"
          />
        </h1>
      </div>
      <div className="m-4 md:m-8 lg:m-12">
        <section className="mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 underline">
            1. Cancellation by the User
          </h2>
          <p className="text-gray-300 mb-4">
            <strong>Requesting Cancellation:</strong> You may request to cancel
            your registration by contacting us at least 14 days before the
            course start date. To initiate a cancellation, email us at{" "}
            <a
              href="mailto:stock.ed.trading@gmail.com"
              className="text-sm text-white hover:underline font-extrabold"
            >
              stock.ed.trading@gmail.com
            </a>
            .
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Refund Eligibility:</strong> If you cancel at least 14 days
            before the course, you &apos;ll receive a full refund minus a ₹5,000
            processing fee. No refund for cancellations within 14 days of the
            course start date.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Transfer Option:</strong> If unable to attend, you may
            transfer your registration by notifying us at least 7 days prior.
            The new participant must meet eligibility requirements.
          </p>
        </section>

        <section className="mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 underline">
            2. Cancellation by StockED Trading
          </h2>
          <p className="text-gray-300 mb-4">
            StockED Trading reserves the right to cancel courses due to
            insufficient enrollment or other circumstances. You will receive a
            full refund if a course is canceled.
          </p>
          <p className="text-gray-300 mb-4">
            <strong>Rescheduling:</strong> If rescheduled, you may transfer to
            the new date or receive a refund.
          </p>
        </section>

        <section className="mb-6 md:mb-8 lg:mb-10">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 underline">
            3. Non-Refundable Fees
          </h2>
          <p className="text-gray-300 mb-4">
            A non-refundable processing fee of ₹5,000 applies to all
            cancellations initiated by the user.
          </p>
        </section>

        <div className="flex flex-col items-center text-center mb-12">
          <h1 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4">
            Have questions about your return and refund? Contact us at{" "}
            <span className="text-purple">Stock-ED</span> Trading Company.
          </h1>
          <p className="text-white-200 md:mt-4 mb-4">
            Email us at{" "}
            <a
              href="mailto:stock.ed.trading@gmail.com"
              className="text-sm text-white hover:underline font-extrabold"
            >
              stock.ed.trading@gmail.com
            </a>
            .
          </p>
          <p className="text-gray-300 mb-4">
            65/1428-E, E1, E3, E4, 4TH FLOOR, MW1 CALICUT,
            <br />
            KANNANKANDY MANSION, BILATHIKULAM,
            <br />
            Nadakavu, Kozhikode, Kerala, India, 673011
          </p>
          <p className="text-gray-300 mb-4">
            Phone:{" "}
            <a
              href="tel:+919037713791"
              className="text-sm text-white hover:underline font-extrabold"
            >
              +91 90377 13791
            </a>
          </p>
          <MagicButton
            title="Get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <p className="text-sm md:text-base font-light mb-4 md:mb-0">
            Copyright © 2024 STOCK-ED TRADING
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link href="/privacy-policy">
              <a className="text-sm text-white hover:underline">
                Privacy Policy
              </a>
            </Link>
            <Link href="/terms-and-conditions">
              <a className="text-sm text-white hover:underline">
                Terms and Conditions
              </a>
            </Link>
            <Link href="/return-and-refund">
              <a className="text-sm text-white hover:underline">
                Return and Refund
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnAndRefund;
