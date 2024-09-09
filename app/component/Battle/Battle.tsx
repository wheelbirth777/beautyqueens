"use client";

import {
  Container,
  Group,
  Image,
  Pagination,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";

import classes from "./battle.module.css";
import React, { useState } from "react";
import SliderImage from "../../component/SliderImage";
import prisma from "@/prisma/client";
import { chunk, Model, ModelListProps } from "../../HomePage";

const modelTVSpecial = [
  {
    name: "Sophia",
    main_title: "Italy 2015",
    tvSpecial_image: "../images/battle/italy.webp",
  },

  {
    name: "Juliene",
    main_title: "Philippines 2015",
    tvSpecial_image: "../images/battle/philippines.webp",
  },

  {
    name: "Erica",
    main_title: "Spain 2015",
    tvSpecial_image: "../images/battle/spain.webp",
  },

  {
    name: "Giselle",
    main_title: "Cuba 2015",
    tvSpecial_image: "../images/battle/cuba.webp",
  },

  {
    name: "Andrea",
    main_title: "Columbia 2015",
    tvSpecial_image: "../images/battle/columbia.webp",
  },

  {
    name: "Luisa",
    main_title: "Venezuela 2015",
    tvSpecial_image: "../images/battle/venezuela.webp",
  },

  {
    name: "Diem",
    main_title: "Vietnam 2015",
    tvSpecial_image: "../images/battle/vietnam.webp",
  },

  {
    name: "Jamillette",
    main_title: "Lebanon 2015",
    tvSpecial_image: "../images/battle/lebanon.webp",
  },

  {
    name: "Rachelle",
    main_title: "France 2015",
    tvSpecial_image: "../images/battle/france.webp",
  },
  {
    name: "Michelle",
    main_title: "Ireland 2015",
    tvSpecial_image: "../images/battle/ireland.webp",
  },

  {
    name: "Lilian",
    main_title: "Mexico 2015",
    tvSpecial_image: "../images/battle/mexico.webp",
  },

  {
    name: "Victoria",
    main_title: "China 2015",
    tvSpecial_image: "../images/battle/china.webp",
  },

  {
    name: "Veronica",
    main_title: "Puerto Rico 2015",
    tvSpecial_image: "../images/battle/puertorico.webp",
  },

  {
    name: "Cecilia",
    main_title: "Uruguay 2015",
    tvSpecial_image: "../images/battle/uruguay.webp",
  },

  {
    name: "Kristi",
    main_title: "Japan 2015",
    tvSpecial_image: "../images/battle/japan.webp",
  },

  {
    name: "Maha",
    main_title: "Pakistan 2015",
    tvSpecial_image: "../images/battle/pakistan.webp",
  },

  {
    name: "Vanda",
    main_title: "Slovakia 2015",
    tvSpecial_image: "../images/battle/slovakia.webp",
  },
  {
    name: "Maja",
    main_title: "Croatia 2015",
    tvSpecial_image: "../images/battle/croatia.webp",
  },
  {
    name: "Mina",
    main_title: "Canada 2015",
    tvSpecial_image: "../images/battle/canada.webp",
  },
  {
    name: "Sally",
    main_title: "Scotland 2015",
    tvSpecial_image: "../images/battle/scotland.webp",
  },
];

const Battle = ({ models }: ModelListProps) => {
  const [activePageTVSpecial, setPageTVSpecial] = useState(1);
  const paginateTVSpecial = chunk(
    modelTVSpecial.map((model) => ({ ...model })),
    6
  );

  const itemAllModels = paginateTVSpecial[activePageTVSpecial - 1]?.map(
    (item) => ({
      ...item,
    })
  );

  return (
    <>
      <Container size="100vw">
        <Container size="xl">
          <SimpleGrid cols={1}>
            <div>
              <video width="100%" muted autoPlay loop>
                <source src="/videos/bqi_opener.mp4" />
              </video>
            </div>
          </SimpleGrid>
        </Container>
      </Container>

      <Container size="xl">
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Stack c={"dimmed"} align={"center"}>
          <Title>Battle of the Beauty Queens</Title>
          <Title c={"white"} size={"h2"}>
            TV Special
          </Title>
        </Stack>

        <Space h="xl" />
        <Space h="xl" />
        <SimpleGrid cols={2}>
          {itemAllModels.map((model) => (
            <Paper shadow="xs" radius="xs" withBorder p="xl" key={model.name}>
              <Image src={model.tvSpecial_image} alt={model.name} />
            </Paper>
          ))}
        </SimpleGrid>
        <Space h="xl" />
        <Space h="xl" />
        <Group justify="center">
          <Pagination
            size="xl"
            radius="xl"
            total={paginateTVSpecial.length}
            value={activePageTVSpecial}
            onChange={setPageTVSpecial}
            mt="sm"
          />
        </Group>

        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
      </Container>
    </>
  );
};

export default Battle;
