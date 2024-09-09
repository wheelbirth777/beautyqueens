"use client";

import {
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
  useMantineTheme,
  Stack,
  Container,
  Flex,
  rgba,
  Title,
  Space,
  Grid,
} from "@mantine/core";
import { Image } from "@mantine/core";

import Carousel2 from "@/app/component/swiperjs/Carousel2/Carousel2";

import { useDisclosure } from "@mantine/hooks";
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import classes from "./HeaderMegaMenu.module.css";

import { ImageResponse } from "next/server";
import ColorScheme from "./ColorScheme";
import Link from "next/link";
import FadeInWhenVisible from "./FadeInWhenVisible";

const mockdata = [
  {
    icon: IconCode,

    title: "Latina Beauty Queen",
    description: "Description...",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      <Container fluid bg="black" p="0">
        <header className={classes.header}>
          <Group justify="space-between" h="100%">
            <div>
              <Image
                style={{ width: "75px" }}
                className={classes.test}
                src="../images/logo.jpg"
                alt="Logo"
              />
            </div>

            <Group h="100%" gap={0} visibleFrom="sm">
              <Link href="/" className={classes.link}>
                Home
              </Link>

              <HoverCard position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        <Button>Beauty Queens</Button>
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown
                  style={{ overflow: "hidden" }}
                  bg="none"
                  w="100%"
                  className={classes.hovercardDropdown}
                >
                  <div className={classes.dropdown}>
                    <Group justify="space-between" px="md">
                      <Title order={2}>Beauty Queens</Title>
                    </Group>

                    <Divider my="sm" />

                    <Grid columns={20}>
                      <Grid.Col span={4}>
                        {" "}
                        <Space h="md" />
                        <Button component="a" href="/models/latina">
                          <Title order={4}>Latina BQ </Title>
                        </Button>
                        <Space h="md" />
                        <Button component="a" href="/models/lais-de-leon">
                          <Text c="dimmed">Lais De Leon</Text>
                        </Button>
                        <Anchor component="a" href="/models/giselle-capdevila">
                          <Text c="dimmed">Giselle Capdevila</Text>
                        </Anchor>
                        <Anchor underline="never" href="/models/erica-vanlee">
                          <Text c="dimmed">Erica Vanlee</Text>
                        </Anchor>
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
                        {" "}
                        <Space h="md" />
                        <Link href="/models/asia">
                          <Title order={4}>Asia BQ </Title>
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
                          <Title order={5}>European BQ </Title>
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
                          <Title order={4}>American BQ </Title>
                        </Link>
                        <Space h="md" />
                        <Link href="/models/kathryn-stone">
                          <Text c="dimmed">Kathryn Stone</Text>
                        </Link>
                      </Grid.Col>
                      <Grid.Col span={4}>
                        {" "}
                        <Space h="md" />
                        <Link href="/models/exotic">
                          <Title order={4}>Exotic BQ </Title>
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

                    <Space h="md" />
                    <SimpleGrid cols={1}>
                      <div
                        style={{
                          width: "100%",
                          height: "250px",
                          display: "flex",
                          alignSelf: "center",
                        }}
                      >
                        <Carousel2 />
                      </div>
                    </SimpleGrid>
                    <div className={classes.dropdownFooter}></div>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>

              <a href="#" className={classes.link}>
                Beauty Pageants
              </a>

              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Winners Page
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown
                  style={{ overflow: "hidden" }}
                  bg="rgba(30,30,48,1)"
                >
                  <Group justify="space-between" px="md">
                    <Text fw={500}>The Winners Page</Text>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          <Link href="/models/ariana-varela">Get started</Link>
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>

              <HoverCard
                width={800}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal
              >
                <HoverCard.Target>
                  <a href="#" className={classes.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Battle
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown
                  style={{ overflow: "hidden" }}
                  bg="rgba(30,30,48,1)"
                >
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Battle Of The Beauty Queens</Text>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={0}>
                    {links}
                  </SimpleGrid>

                  <div className={classes.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Carousel2 />
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>

              <a href="#" className={classes.link}>
                Contact Us
              </a>
            </Group>

            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
            />
          </Group>
        </header>
      </Container>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          <a href="#" className={classes.link}>
            Home
          </a>
          <UnstyledButton className={classes.link} onClick={toggleLinks}>
            <Center inline>
              <Box component="span" mr={5}>
                Features2
              </Box>
              <IconChevronDown
                style={{ width: rem(16), height: rem(16) }}
                color={theme.colors.blue[6]}
              />
            </Center>
          </UnstyledButton>
          <Collapse in={linksOpened}>{links}</Collapse>
          <a href="#" className={classes.link}>
            Learn
          </a>
          <a href="#" className={classes.link}>
            Academy
          </a>

          <Divider my="sm" />
        </ScrollArea>
      </Drawer>
    </>
  );
}
