import { NextResponse } from "next/server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { PrismaClient } from '@prisma/client'
import { redirect } from "next/navigation";
import { encrypt , decrypt } from "../../../../server/auth";
const prisma = new PrismaClient()

export async function POST(req :Request) {
  const body = await req.json();
  console.log(body)
  const electeurs = await prisma.electeur.findMany()
  const isElecteur = electeurs.find(electeur => electeur.cni === body.cni && electeur.numeroElecteur === body.numeroElecteur)
  if (!isElecteur) {
    console.log("Vous n'etes pas un electeur")
    return NextResponse.json({ state: true }, { status: 200 })
  }
  // // Create the session
 
  // const expires = new Date(Date.now() + 10 * 10000);
  // const session = await encrypt({ isElecteur, expires });
  // console.log(session)

  // // Save the session in a cookie
  // cookies().set("session", session, { expires, httpOnly: true });
  // redirect("/electeur/voter")
  // return NextResponse.json({ message: "Hello World" }, { status: 200 });
}