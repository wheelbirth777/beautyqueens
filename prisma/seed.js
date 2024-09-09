import { PrismaClient } from "@prisma/client";

import data from "./data.js";

const prisma = new PrismaClient();

async function main() {
  for (let model of data.models) {
    await prisma.model.create({
      data: model,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
