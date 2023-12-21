import { prisma } from "@/lib/prisma.js";
import { NextResponse } from "next/server.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(request, response) {
  // how can i console.log the username and password from the body of the request
  try {
    const cookieStore = cookies();
    const { username, password } = await request.json();

    // create the user
    const hashedPassword = await bcrypt.hash(password, 14);

    // we want to search for a user first
    const _user = await prisma.user.findFirst({ where: { username } });
    if (_user) {
      return NextResponse.json({
        success: false,
        error: "User already registered. Please login",
      });
    }

    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });
    delete user.password;
    // create the token that we can send in the cookie
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
    cookieStore.set("token", token);
    return NextResponse.json({ success: true, user, token });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
