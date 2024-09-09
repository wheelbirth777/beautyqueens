import React, { useEffect, useRef, useState } from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

import SliderImage from "@/app/component/SliderImage";
import ModelDetailPage from "@/app/component/ModelDetailPage";

import { Model } from "@/app/HomePage";
import FadeInWhenVisible from "@/app/ui/FadeInWhenVisible";
import { Container, Space, Title } from "@mantine/core";
import { GET } from "@/app/api/models/[slug]/route";

interface Props {
  params: { slug: string };
}

const IssueDetailPage = async ({ params }: Props) => {
  const model = await prisma.model.findUnique({
    where: {
      slug: params.slug,
    },
  });

  if (!model) {
    return <div>Model not found</div>;
  }

  return (
    <>
      <ModelDetailPage model={model} />
    </>
  );
};

export default IssueDetailPage;
