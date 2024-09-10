"use client";

import {
  Anchor,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Container,
  Divider,
  Drawer,
  Flex,
  Grid,
  Group,
  HoverCard,
  NavLink,
  rem,
  ScrollArea,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import React, { useState } from "react";

import classes from "@/app/component/MegaMenu/MegaMenu.module.css";
import Carousel2 from "../swiperjs/Carousel2/Carousel2";
import { useDisclosure } from "@mantine/hooks";
import { IconChevronDown } from "@tabler/icons-react";
import CarouselFrontPage from "../swiperjs/CarouselFrontPage/CarouselFrontPage";
import SliderImage from "../SliderImage";
import Image from "next/image";
import { SiImprovmx } from "react-icons/si";

const MegaMenu = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpenedBQ, { toggle: toggleLinksBQ }] = useDisclosure(false);
  const [linksOpenedBattle, { toggle: toggleLinksBattle }] =
    useDisclosure(false);
  const [linksOpenedWinner, { toggle: toggleLinksWinner }] =
    useDisclosure(false);
  return (
    <>
      <Container
        fluid
        w={"100vw"}
        bg={"black"}
        p={0}
        className={classes.dropMask}
      >
        <Flex justify="center" wrap="nowrap" pt={15}>
          <div style={{ width: "20%" }}>
            <Image src="/images/logo.png" alt="logo" width={165} height={70} />
          </div>

          <SimpleGrid h={75} w={"60%"}>
            <Group justify="center" visibleFrom="xs">
              <Link href="/">
                <Text c={"white"} fw={600}>
                  Home
                </Text>
              </Link>

              <Link href="/battle">
                {" "}
                <Text c={"white"} fw={600}>
                  Battle
                </Text>
              </Link>
              <Link href="/winners">
                {" "}
                <Text c={"white"} fw={600}>
                  Winners Page
                </Text>
              </Link>

              <HoverCard width="55vw" shadow="md">
                <HoverCard.Target>
                  <Button bg={"transparent"}>
                    <Text fw={600}>Beauty Queens</Text>
                  </Button>
                </HoverCard.Target>

                <HoverCard.Dropdown>
                  <SimpleGrid cols={1} h={300}>
                    <SliderImage />
                  </SimpleGrid>

                  <Divider my="sm" />

                  <Container size={"lg"}>
                    <Grid columns={20}>
                      <Grid.Col span={4}>
                        <Space h="md" />
                        <Link href="/models/latina">
                          <Title c={"white"} order={4}>
                            Latina BQ{" "}
                          </Title>
                        </Link>
                        <Space h="md" />
                        <Link href="/models/lais-de-leon">
                          <Text c="dimmed">Lais De Leon</Text>
                        </Link>
                        <Link href="/models/giselle-capdevila">
                          <Text c="dimmed">Giselle Capdevila</Text>
                        </Link>
                        <Link href="/models/erica-vanlee">
                          <Text c="dimmed">Erica Vanlee</Text>
                        </Link>
                        <Link href="/models/andrea-prias">
                          <Text c="dimmed">Andrea Prias</Text>
                        </Link>
                        <Link href="/models/lilian-aguilar">
                          <Text c="dimmed">Lilian</Text>
                        </Link>
                        <Link href="/models/veronica">
                          <Text c="dimmed">Veronica</Text>
                        </Link>
                        <Space h="md" />
                      </Grid.Col>

                      <Grid.Col span={4}>
                        <Space h="md" />
                        <Link href="/models/asia">
                          <Title order={4} c={"white"}>
                            Asia BQ{" "}
                          </Title>
                        </Link>
                        <Space h="md" />
                        <Link href="/models/ariana-varela">
                          <Text c="dimmed">Ariana Varela</Text>
                        </Link>
                        <Link href="/models/snoe-blac">
                          <Text c="dimmed">Snoe Blac</Text>
                        </Link>
                        <Link href="/models/gina-deziree">
                          <Text c="dimmed">Gina Deziree</Text>
                        </Link>
                        <Space h="md" />
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Space h="md" />
                        <Link href="/models/european">
                          <Title order={4} c={"white"}>
                            European BQ{" "}
                          </Title>
                        </Link>
                        <Space h="md" />
                        <Link href="/models/marketa-janska">
                          <Text c="dimmed">Marketa Janska</Text>
                        </Link>
                        <Link href="/models/nina-kaczorowski">
                          <Text c="dimmed">Nina Kaczorowski</Text>
                        </Link>
                        <Link href="/models/olga">
                          <Text c="dimmed">Olga</Text>
                        </Link>
                        <Space h="md" />
                      </Grid.Col>

                      <Grid.Col span={4}>
                        <Space h="md" />
                        <Link href="/models/american">
                          <Title order={4} c={"white"}>
                            American BQ{" "}
                          </Title>
                        </Link>
                        <Space h="md" />
                        <Link href="/models/kathryn-stone">
                          <Text c="dimmed">Kathryn Stone</Text>
                        </Link>
                      </Grid.Col>
                      <Grid.Col span={4}>
                        <Space h="md" />
                        <Link href="/models/exotic">
                          <Title order={4} c={"white"}>
                            Exotic BQ{" "}
                          </Title>
                        </Link>
                        <Space h="md" />
                        <Link href="/models/alicia-caldwell">
                          <Text c="dimmed">Alicia Caldwell</Text>
                        </Link>
                        <Link href="/models/elisa">
                          <Text c="dimmed">Elisa</Text>
                        </Link>
                        <Space h="md" />
                      </Grid.Col>
                    </Grid>
                  </Container>
                </HoverCard.Dropdown>
              </HoverCard>

              <Link href="/pageants">
                <Text c={"white"} fw={600}>
                  Beauty Pageants
                </Text>
              </Link>
              <Link href="/contactus">
                <Text c={"white"} fw={600}>
                  Contact Us
                </Text>
              </Link>
            </Group>
          </SimpleGrid>

          <Flex w={"20%"} justify={"end"} align={"center"} pr={100}>
            <Link href="/">
              <Text c={"white"} fw={600}>
                Login
              </Text>
            </Link>
          </Flex>
        </Flex>
      </Container>

      <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
      <Drawer
        withCloseButton={false}
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <Divider my="sm" />

        <div>
          <a href="/" className={classes.link}>
            Home
          </a>
        </div>
        <div>
          <UnstyledButton
            className={classes.link}
            onClick={() => {
              toggleLinksBQ();
              if (linksOpenedBattle) toggleLinksBattle();
              if (linksOpenedWinner) toggleLinksWinner();
            }}
          >
            <Center inline>
              <Box component="span" mr={5}>
                Beauty Queens
              </Box>
            </Center>
          </UnstyledButton>

          <Collapse in={linksOpenedBQ}>
            <NavLink label="Latina Beauty Queens" bg="blue">
              <Text>Lais De Leon</Text>
              <Text>Giselle Capdevila Leon</Text>
              <Text>Erica Vanlee De Leon</Text>
              <Text>Andrea Prias</Text>
              <Text>Lilian</Text>
              <Text>Veronica</Text>
            </NavLink>
            <NavLink label="Asia Beauty Queens" bg="blue">
              <Text>Arian Varela</Text>
              <Text>Snoe Blac</Text>
              <Text>Gina Deziree</Text>
            </NavLink>

            <NavLink label="European Beauty Queens" bg="blue">
              <Text>Arian Varela</Text>
              <Text>Snoe Blac</Text>
              <Text>Gina Deziree</Text>
            </NavLink>

            <NavLink label="American Beauty Queens" bg="blue">
              <Text>Arian Varela</Text>
              <Text>Snoe Blac</Text>
              <Text>Gina Deziree</Text>
            </NavLink>

            <NavLink label="Exotic Beauty Queens" bg="blue">
              <Text>Arian Varela</Text>
              <Text>Snoe Blac</Text>
              <Text>Gina Deziree</Text>
            </NavLink>
          </Collapse>
        </div>

        <div>
          <a href="/battle" className={classes.link}>
            Battle of the Beauty Queens
          </a>
        </div>

        <div>
          <a href="/winners" className={classes.link}>
            Winners Page
          </a>
        </div>

        <div>
          <a href="/pageants" className={classes.link}>
            Beauty Pageants
          </a>
        </div>
        <a href="/contactus" className={classes.link}>
          Contact Us
        </a>

        <Divider my="sm" />
      </Drawer>
    </>
  );
};

export default MegaMenu;
