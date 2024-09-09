import { NextRequest, NextResponse } from "next/server";

import prisma from "@/prisma/client";

export async function GET(request: NextRequest) {
  const models = await prisma.model.findMany();
  console.log(models);
  return NextResponse.json(models);
}
