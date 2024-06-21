import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";


export async function POST(req :Request) {
    const prisma = new PrismaClient()
    const body = await req.json();
    console.log(body)
    const {tour , date , matricule} = body;
    const Election = await prisma.election.create({
        data:{
            titre:tour,
            matricule,
            date,
        }
    }) 
    revalidatePath('/dashboard/index')
    return NextResponse.json({ Election }, { status: 200 });

}