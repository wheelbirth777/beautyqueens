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
import classes from "./EventsCard.module.css";
import { Image } from "@mantine/core";
import { Tooltip, Button, em } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Link from "next/link";

const mockdata = [
  {
    image: "../images/news.webp",
    title: "News",
    url: "http://localhost:3000/news/doralmiami",
    description:
      "The 63rd Annual MISS UNIVERSE® Pageant To Be Held In Doral-Miami At Florida International University January 25 (8-11 P.M. ET) On NBC",
    icon: IconGauge,
  },
  {
    image: "../images/academy.webp",
    title: "Vegas Academy",
    url: "http://localhost:3000/academy",
    description:
      "Welcome my fellow Beauty Queens! I want to extend an invitation to come to Las Vegas and participate in our many Beauty Queen contests and TV shows... - Kathryn Stone",
    icon: IconUser,
  },
  {
    image: "../images/press.webp",
    title: "Asia Beauty Queen 2011",
    url: "http://localhost:3000/press",
    description: "Battle Of The Beauty Queens - Worldwide TV Broadcast",
    icon: IconCookie,
  },
  {
    image: "../images/event.png",
    title: "Recent Events",
    url: "http://localhost:3000/events",
    description: "Bahamas & Las Vegas Events",
    icon: IconUser,
  },
];

export function EventsCard() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <Link href={feature.url}>
        <Image src={feature.image} alt="test"></Image>
      </Link>

      <Link href={feature.url}>
        <Text
          fz="lg"
          fw={500}
          className={classes.cardTitle}
          mt="md"
          c={"white"}
        >
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Link>
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
