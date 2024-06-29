import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const prisma = new PrismaClient();
  const body = await request.json();

  try {
    const vote =await prisma.vote.create({
      data: {
        electeurId: body.session as string,
        candidatId: body.candidatId as string,
        electionId: body.electionId as string,
      },
      include:{electeur:true}
    });
    return NextResponse.json({ vote }, { status: 200 });
  } catch (er) {
    console.log(er);
    return NextResponse.json(
      { message: "error while saving vote" },
      { status: 500 }
    );
  }
}
