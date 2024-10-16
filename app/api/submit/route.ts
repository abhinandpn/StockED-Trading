import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

// Set up authentication
const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"), // Handle private key formatting
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const sheets = google.sheets({ version: "v4", auth });

// Spreadsheet ID from environment variables
const SPREADSHEET_ID = process.env.GOOGLE_SPREADSHEET_ID;

export async function POST(req: NextRequest) {
  const { name, phone, email } = await req.json(); // Parse request body

  try {
    // Append the data to the Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID!,
      range: "Sheet1!A:C", // The range where you want to append data
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[name, phone, email]], // Inserted data
      },
    });

    return NextResponse.json({ message: "Data saved successfully!" });
  } catch (error) {
    console.error("Error saving data to Google Sheets", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
