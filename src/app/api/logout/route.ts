import { NextResponse } from "next/server";
import { logout } from "../../../../server/auth";
import { redirect } from "next/navigation";

export async function GET (req :Request){
    await logout();
    redirect('/login')
}