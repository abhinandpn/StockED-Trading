import { NextRequest, NextResponse } from "next/server";
import Razorpay from "razorpay";

// Initialize Razorpay instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!, // Use environment variables
  key_secret: process.env.RAZORPAY_KEY_SECRET!, // Use environment variables
});

// Handle POST request to create a Razorpay order
export async function POST(req: NextRequest) {
  try {
    const { amount } = await req.json(); // Parse request body (amount)

    const options = {
      amount: amount * 100, // Amount in paise (smallest currency unit)
      currency: "INR",
      receipt: "order_rcptid_11",
    };

    // Create a new Razorpay order
    const order = await razorpay.orders.create(options);

    // Return the order ID as a response
    return NextResponse.json({ orderId: order.id });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Razorpay order creation failed" },
      { status: 500 }
    );
  }
}
