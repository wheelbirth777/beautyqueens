import {
  Container,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Title,
} from "@mantine/core";
import React from "react";
import CarouselGL from "../component/swiperjs/CarouselGL/CarouselGL";
import classes from "./page.module.css";
const page = () => {
  return (
    <>
      <Container size="xl" h="500px">
        <CarouselGL />
      </Container>
      <Container size="xl">
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Stack c={"dimmed"} align={"center"}>
          <Title>Our Winners</Title>
        </Stack>

        <Space h="xl" />
        <Space h="xl" />
        <SimpleGrid cols={2}>
          <Paper shadow="xs" radius="xs" withBorder p="xl">
            <Image src="../images/kathryn.webp" alt="kathryn" />
          </Paper>
          <Paper shadow="xs" radius="xs" withBorder p="xl">
            <Image src="../images/ariana.webp" alt="ariana" />
          </Paper>
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <Paper shadow="xs" radius="xs" withBorder p="xl">
            <Image src="../images/giselle.webp" alt="giselle" />
          </Paper>
          <Paper shadow="xs" radius="xs" withBorder p="xl">
            <Image src="../images/andrea.webp" alt="andrea" />
          </Paper>
        </SimpleGrid>
        <SimpleGrid cols={2}>
          <Paper shadow="xs" radius="xs" withBorder p="xl">
            <Image src="../images/lais.jpg" alt="tv" />
          </Paper>
        </SimpleGrid>
        <Space h="xl" />
        <Space h="xl" />

        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
      </Container>
    </>
  );
};

export default page;
