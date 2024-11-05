import { NextRequest, NextResponse } from "next/server";
import { jwtVerify, SignJWT } from "jose";

const key = new TextEncoder().encode(process.env.secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}
export async function updateSession(request: NextRequest) {
    const session = request.cookies.get("session")?.value;
    if (!session) return;

    const parsed = await decrypt(session);
    parsed.expires = new Date(Date.now() + 10 * 1000)
    const res = NextResponse.next();
    res.cookies.set({
        name: "session",
        value: await encrypt(parsed),
        httpOnly: true,
        expires: parsed.expires,
    })
}

export async function decrypt(input: string) : Promise<any> {
    const {payload} = await jwtVerify(input, key , {
        algorithms: ["HS256"],
    })
    return payload
}