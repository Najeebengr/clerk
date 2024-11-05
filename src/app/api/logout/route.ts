import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
        // Destroy the session
    cookies().set("session", "", { expires: new Date(0) });

       return NextResponse.json({message: "User Logout Successfully"})
}