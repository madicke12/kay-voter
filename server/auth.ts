import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
import { redirect } from "next/navigation";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

export async function login(formData: FormData) {
  'use server'
  console.log(formData.get('cni'))
  const prisma = new PrismaClient()

  const electeurs = await prisma.electeur.findMany()
  const isElecteur = electeurs.find(electeur => electeur.cni === formData.get('cni'))
  if (!isElecteur) {
    console.log("Vous n'etes pas un electeur")
    return 
  }
  // Create the session
  const user = await prisma.electeur.findUnique({
    where: {
      cni: formData.get('cni') as string
    }
  })
  console.log(user)
  const expires = new Date(Date.now() + 10 * 10000);
  const session = await encrypt({ user, expires });
  console.log(session)

  // Save the session in a cookie
  cookies().set("session", session, { expires, httpOnly: true });
  redirect("/electeur/voter")
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 10 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}