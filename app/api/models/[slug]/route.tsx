import prisma from "@/prisma/client";
import { Model } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const model = await prisma.model.findUnique({
    where: {
      slug: params.slug,
    },
  });

  return NextResponse.json(model);
}
