"use client";

import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
  BackgroundImage,
  Center,
  Space,
  Flex,
  rgba,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "./FeaturesCards.module.css";
import { Image } from "@mantine/core";
import { Tooltip, Button, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const mockdata = [
  {
    image: "../images/news.webp",
    title: "News",
    description:
      "This dust is actually a powerful poison that will even make a pro wrestler sick, Regice cloaks itself with frigid air of -328 degrees Fahrenheit",
    icon: IconGauge,
  },
  {
    image: "../images/academy.webp",
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser,
  },
  {
    image: "../images/press.webp",
    title: "No third parties",
    description:
      "They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves",
    icon: IconCookie,
  },
  {
    image: "../images/academy.webp",
    title: "Privacy focused",
    description:
      "People say it can run at the same speed as lightning striking, Its icy body is so cold, it will not melt even if it is immersed in magma",
    icon: IconUser,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Image src={feature.image} alt="test"></Image>
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  return (
    <>
      <Container className={classes.backg} fluid p="0">
        <BackgroundImage src="../images/bqbackground7.webp">
          <Group justify="center"></Group>

          {isMobile ? <Space h="lg" /> : <Space h="70vh" />}

          <Flex
            mih={50}
            gap="md"
            justify="center"
            align="flex-start"
            direction="row"
          >
            <SimpleGrid
              cols={{ base: 1, sm: 2, lg: 4 }}
              w="75%"
              spacing="xl"
              mt={50}
            >
              {features}
            </SimpleGrid>
          </Flex>
          <Space h="xl" />
          <Space h="xl" />
          <Space h="xl" />
        </BackgroundImage>
      </Container>
    </>
  );
}
