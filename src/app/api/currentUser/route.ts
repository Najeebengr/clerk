import { NextRequest, NextResponse } from "next/server";
import { decrypt } from "../login/utils";

export async function GET(request: NextRequest) {
    const authToken = request.cookies.get("session")?.value;
    const token = await decrypt(authToken as string);
    
    return NextResponse.json({user: token.user});
}   