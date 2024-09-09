"use client";

import {
  Text,
  Title,
  TextInput,
  Button,
  Image,
  Container,
  BackgroundImage,
  Group,
  Space,
} from "@mantine/core";
import image from "./image.svg";
import classes from "./EmailBanner.module.css";

interface Model {
  name: string;
  title: string;
  image: string;
  description1: string;
  description2: string;
  description3: string;
}

interface ModelProps {
  modelInfo: Model;
}

export function EmailBanner({ modelInfo }: ModelProps) {
  const model = modelInfo;
  console.log(model);
  return (
    <BackgroundImage src={model.image} radius="md" p={"75px"}>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title>{model.name}</Title>

          <Text fw={500} fz="lg" mb={5}>
            {model.title}
          </Text>
          <Space h="md" />
          <Text fz="sm" w="75%">
            {model.description1}
          </Text>
          <Space h="md" />
          <Text fz="sm" w="75%">
            {model.description2}
          </Text>
          <Space h="md" />
          <Text fz="sm" w="75%">
            {model.description3}
          </Text>
        </div>
      </div>
    </BackgroundImage>
  );
}
