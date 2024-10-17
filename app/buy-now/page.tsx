"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; 
import { FaLocationArrow } from "react-icons/fa";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect"; // Ensure this is a valid import
import MagicButton from "./MagicButton";
import Link from "next/link";

const Page: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = { name: "", phone: "", email: "" };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
      valid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRazorpayPayment = async (orderId: string) => {
    const isScriptLoaded = await loadRazorpayScript();
    if (!isScriptLoaded) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: 1000 * 100, // Amount in paise
      currency: "INR",
      name: "STOCK ED TRADING INSTITUTE",
      description: "Test Payment",
      image: "/logo.png",
      order_id: orderId,
      handler: function (response: any) {
        router.push("/");
        console.log("Payment details:", response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone,
      },
      theme: {
        color: "#3399cc",
      },
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      const formResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (formResponse.ok) {
        setSuccessMessage("Form submitted successfully, Please wait");
        setFormData({ name: "", phone: "", email: "" });
        setErrors({ name: "", phone: "", email: "" });

        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        const paymentResponse = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 23600 }), // Example: Rs 1000
        });

        const paymentData = await paymentResponse.json();
        if (paymentData.orderId) {
          handleRazorpayPayment(paymentData.orderId);
        }
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md border border-gray-400 p-8 rounded-lg shadow-lg bg-black">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          STOCK-ED TRADING CONTACT FORM
        </h2>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2 text-white">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div>
            <label htmlFor="phone" className="block mb-2 text-white">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone ? "border-red-500" : ""
              }`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-white">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 w-full rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-500"
            disabled={loading}
          >
            {loading ? (
              <span className="loader">Processing...</span>
            ) : (
              "Buy Now"
            )}
          </button>
        </form>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center relative mt-10 text-white">
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

      <div className="flex mt-16 flex-col md:flex-row justify-between items-center w-full max-w-md">
        <p className="text-sm md:text-base font-light">
          Copyright © 2024 STOCK-ED TRADING
        </p>
        <div className="flex items-center gap-4 mt-2 md:mt-0">
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
  );
};

export default Page;
