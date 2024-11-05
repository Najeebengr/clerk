import { jwtVerify, SignJWT } from "jose";
import { cookies } from "next/headers";

const key = new TextEncoder().encode(process.env.secretKey);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function encrypt(payload: any) {
    return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h from now")
    .sign(key);
}

export async function getSession() {
    const session = cookies().get("session")?.value;
    if (!session) return null;
    return await decrypt(session);
  }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function decrypt(input: string) : Promise<any> {
    const {payload} = await jwtVerify(input, key , {
        algorithms: ["HS256"],
    })
    return payload
}
