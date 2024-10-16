"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Updated import

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
  const [loading, setLoading] = useState(false); // Track loading state
  const router = useRouter(); // useRouter for redirection

  // Load Razorpay script dynamically
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

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Name can only contain letters and spaces";
      valid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
      valid = false;
    }

    // Email validation
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
      amount: 1000 * 100,
      currency: "INR",
      name: "STOCK ED TRADING INSTITUTE", // Company or Merchant name
      description: "Test Payment",
      image: "/logo.png", // Optional company logo
      order_id: orderId,
      handler: function (response: any) {
        router.push("/");
        console.log("Payment details:", response);
      },
      prefill: {
        name: formData.name, // Customer's name here
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

    setLoading(true); // Start loading state

    try {
      // Submit form data to Google Sheets API
      const formResponse = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (formResponse.ok) {
        setSuccessMessage("Form submitted successfully , Please wait");
        setFormData({ name: "", phone: "", email: "" });
        setErrors({ name: "", phone: "", email: "" });

        // Automatically hide success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);

        // Create Razorpay order on the backend
        const paymentResponse = await fetch("/api/create-order", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 1000 }), // Example: Rs 1000
        });

        const paymentData = await paymentResponse.json();
        if (paymentData.orderId) {
          // Open Razorpay payment UI after successful form submission
          handleRazorpayPayment(paymentData.orderId);
        }
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false); // Stop loading state when done
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md border border-gray-400 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Contact Form
        </h2>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form Fields */}
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
            disabled={loading} // Disable button when loading
          >
            {loading ? (
              <span className="loader">Processing...</span> // Display spinner
            ) : (
              "Buy Now"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
