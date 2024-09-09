import {
  Container,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Text,
  Title,
} from "@mantine/core";
import React, { useState } from "react";
import SliderImage from "../component/SliderImage";
import prisma from "@/prisma/client";
import { Model } from "../HomePage";
import Battle from "../component/Battle/Battle";
import CarouselFrontPage from "../component/swiperjs/CarouselFrontPage/CarouselFrontPage";

const page = async () => {
  const models: Model[] = (await prisma.model.findMany()).filter(
    (model) => model.tv_special
  );

  return (
    <>
      <Battle models={models} />
    </>
  );
};

export default page;
