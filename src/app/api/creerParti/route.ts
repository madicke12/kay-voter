import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req :Request){
    const body = await req.json();
    console.log(body)
    const prisma = new PrismaClient();
    const parti = await prisma.parti.create({
        data:{
            nom: body.nom,
            dateCreation: body.dateCreation,
            description: body.description,
            matricule: body.matriculeParti
        }
    
    })


    return NextResponse.json({parti} ,{ status: 200})
}