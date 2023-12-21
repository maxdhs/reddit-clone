import { cookies } from "next/headers.js";
import { NextResponse } from "next/server.js";

export async function POST() {
  // we want to delete a cookie called "token"
  const cookieStore = cookies();
  cookieStore.delete("token");
  return NextResponse.json({ success: true });
}
