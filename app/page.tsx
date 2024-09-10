import React, { useEffect, useState } from "react";

import Link from "next/link";
import { Button, Space, Text, Title } from "@mantine/core";

import HomePage, { Model } from "./HomePage";
import prisma from "@/prisma/client";

interface Models {
  category: string;
  desc_paragraph1: string;
  desc_paragraph2: string;
  desc_paragraph3: string;
  desc_paragraph4: string;
  featured: boolean;
  featured_image: string;
  hair: string;
  height: string;
  images: string[];
  main_title: string;
  name: string;
  short_description: string;
  slug: string;
  tv_special: boolean;
  titles: string[];
  eyes: string;
}

const Page = async () => {
  const models: Model[] = await prisma.model.findMany();

  return (
    <div>
      <HomePage models={models} />
    </div>
  );
};

export default Page;
