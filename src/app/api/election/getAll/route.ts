import { PrismaClient } from "@prisma/client"
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { NextResponse } from "next/server";


export async function GET () {
    const prisma = new PrismaClient()
    try{
        const Elections = await prisma.election.findMany();
    return NextResponse.json(Elections, { status: 200 });
    }catch(er){
        if(er instanceof PrismaClientKnownRequestError){
            if(er.code === 'P2025'){
                return NextResponse.json({message: 'No elections found'}, {status: 404})
            }
            
        }
        return NextResponse.json({message: 'An error occured'}, {status: 500});
    }
    
}