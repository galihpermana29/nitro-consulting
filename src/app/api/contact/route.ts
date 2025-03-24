import { NextResponse } from "next/server";

export async function POST(req: any, res: any) {
  const payload = await req.json();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxmhcERBb2kDvEMuuaZ9JMjMPL7G6gtUHZK5YlABNtRzd4dEhY7e-7hlpoRPUeIXVr0uA/exec",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.text();
    return NextResponse.json({ message: data });
  } catch (error) {
    return NextResponse.json({ error: "Failed to submit form" });
  }
}
