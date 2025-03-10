import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("BODY", body);
  const newUser = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log("NEW USER", newUser);
  return Response.json({
    data: newUser,
    message: "Signup Succesfuly",
  });
}


