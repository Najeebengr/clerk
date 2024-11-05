import { db } from "@/db";
import { usersTable } from "@/db/schema/user";
import { registerSchema } from "@/lib/validation/schema";
import bcrypt from 'bcrypt';
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const saltRounds = 10;
export async function POST(req: NextRequest){
    try{
        
    const body = await req.json();
        const parsedData = registerSchema.parse(body);
console.log("Parsed data:", parsedData);
        const hashPassword = await bcrypt.hash(parsedData.password, saltRounds);
        const data = {
            email: parsedData.email,
            password: hashPassword,
            firstName: parsedData.firstName,
            lastName: parsedData.lastName,
        }
        console.log("Inserting data into usersTable...");
const user = await db.insert(usersTable).values(data).returning();
console.log("User inserted:", user);

        return NextResponse.json({
            message: "User Registered Successfully",
            user,
        })
    }
    catch (error: any) {
        console.error("An error occurred:", error);
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { message: "Something went wrong from zodError", errors: error.errors },
                { status: 400 }
            );
        }
        if (error.code === '23505') {
            return NextResponse.json(
                { message: "Email already exists" },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { message: "Internal Server Error" },
            { status: 500 }
        );
    }
    
}