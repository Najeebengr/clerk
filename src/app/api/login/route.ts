import { db } from "@/db";
import  bcrypt  from 'bcrypt';
import { usersTable } from "@/db/schema/user";
import { loginSchema } from "@/lib/validation/schema";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

export async function POST(req: NextRequest){
    try {
        const body = await req.json();
        const parsedData = loginSchema.parse(body);
        const result = await db.select().from(usersTable).where(eq(usersTable.email, parsedData.email));
        if(result.length > 0){
            const user = result[0];
            const passwordMatch = await bcrypt.compare(parsedData.password, user.password);
            if(passwordMatch){
                return NextResponse.json({message: "User Login Successfully", user})
            }
            else{
                throw new Error("Invalid Email or Password");
            }
        }
        else{
            throw new Error("Invalid Email or Password");
        } 
    } catch (error: any) {
        if (error instanceof z.ZodError) {
          // Return validation errors if Zod validation fails
          return NextResponse.json(
            { message: "Something went wrong from zodError", errors: error.errors },
            { status: 400 }
          );
        }
        return NextResponse.json({ message: error.message }, { status: 400 });
      }
}