import { NextRequest } from "next/server";
import { updateSession } from "./server/auth";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}