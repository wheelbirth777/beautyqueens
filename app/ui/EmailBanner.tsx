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
  Flex,
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

  return (
    <BackgroundImage
      src={model.image}
      radius="md"
      pr={{ xs: 30, sm: 30, md: 100, lg: 300, xl: 400 }}
      pl={30}
      pt={100}
      pb={30}
    >
      <div className={classes.wrapper}>
        <Flex direction="column">
          <Title>{model.name}</Title>

          <Text fw={500} fz="lg">
            {model.title}
          </Text>
          <Space h="md" />
          <Text fz="sm">{model.description1}</Text>
          <Space h="md" />
          <Text fz="sm">{model.description2}</Text>
          <Space h="md" />
          <Text fz="sm">{model.description3}</Text>
        </Flex>
      </div>
    </BackgroundImage>
  );
}
