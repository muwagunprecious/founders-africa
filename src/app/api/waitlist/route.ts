import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@/generated/prisma";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email } = body as { name?: string; email?: string };

    // --- Input validation ---
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, message: "Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { success: false, message: "A valid email address is required." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    // --- Persist to database ---
    // upsert: if this email already exists, update the name; otherwise create a new entry
    const entry = await prisma.waitlistEntry.upsert({
      where: { email: email.trim().toLowerCase() },
      update: { name: name.trim() },
      create: {
        name: name.trim(),
        email: email.trim().toLowerCase(),
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "You've been added to the waitlist! We'll be in touch soon.",
        id: entry.id,
      },
      { status: 200 }
    );
  } catch (error) {
    // Handle Prisma unique constraint violation (should be caught by upsert, but defensive)
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      return NextResponse.json(
        { success: false, message: "This email is already on the waitlist." },
        { status: 409 }
      );
    }

    console.error("[Waitlist API] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}

// Reject non-POST methods cleanly
export async function GET() {
  return NextResponse.json({ message: "Method not allowed." }, { status: 405 });
}
