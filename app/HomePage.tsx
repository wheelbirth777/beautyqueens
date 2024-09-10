"use client";
import CarouselFrontPage from "@/app/component/swiperjs/CarouselFrontPage/CarouselFrontPage";
import styles from "./page.module.css";
import { ContactUs } from "./ui/ContactUs";
import {
  Anchor,
  Card,
  Center,
  Container,
  Flex,
  Group,
  Pagination,
  SimpleGrid,
  Space,
  Tabs,
  Title,
} from "@mantine/core";
import { ArticleCardVertical } from "./ui/ArticleCardVertical";
import { Image, Text } from "@mantine/core";
import { HeroBullets } from "./ui/HeroBullets";
import { EmailBanner } from "./ui/EmailBanner";
import { FeaturesCards } from "./ui/FeaturesCards";
import classes from "./page.module.css";
import FadeInWhenVisible from "@/app/ui/FadeInWhenVisible";
import React, { forwardRef, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { SiFacebook } from "react-icons/si";
import { FaInstagramSquare } from "react-icons/fa";
import { SiYoutubemusic } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
import SliderImage from "@/app/component/SliderImage";
import { calcLength } from "framer-motion";
import { useRef } from "react";
import classes2 from "@/app/ui/cardscarousel/CardsCarousel.module.css";
import TabNavigation from "./ui/Tabs";
import Tabs2 from "./ui/Tabs2";
import Carousel2 from "./component/swiperjs/Carousel2/Carousel2";
import Carousel from "./component/swiperjs/Carousel/Carousel";

import { Inter, Cormorant, Allison } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const cormorant = Cormorant({ subsets: ["latin"] });
const allison = Allison({ weight: "400", subsets: ["latin"] });

export interface Model {
  name: string;
  slug: string;
  featured: boolean;
  tv_special: boolean;
  main_title: string;
  titles: string[];
  height: string;
  hair: string;
  eyes: string;
  category: string;
  short_description: string;
  desc_paragraph1: string;
  desc_paragraph2: string;
  desc_paragraph3: string;
  desc_paragraph4: string;
  featured_image: string;
  images: string[];
}

export interface ModelListProps {
  models: Model[];
}

export function chunk<T>(array: T[], size: number): T[][] {
  if (!array.length) {
    return [];
  }
  const head = array.slice(0, size);
  const tail = array.slice(size);
  return [head, ...chunk(tail, size)];
}

const HomePage = ({ models }: ModelListProps) => {
  const [activePageAllModels, setPageAllModels] = useState(1);

  const [activePageTVSpecial, setPageTVSpecial] = useState(1);
  const [activePageLatinaModels, setPageLatinaModels] = useState(1);
  const [activePageAsianModels, setPageAsianModels] = useState(1);
  const [activePageEuropeanModels, setPageEuropeanModels] = useState(1);

  var allModels = false;
  const anchorTop = "#TOP";

  const paginateAllModels = chunk(
    models.map((model) => ({ ...model })),
    8
  );

  const paginateTVSpecial = chunk(
    models.map((model) => ({ ...model })).filter((model) => model.tv_special),
    8
  );

  const paginateLatinaModels = chunk(
    models
      .map((model) => ({ ...model }))
      .filter((model) => model.category == "Latina"),
    8
  );

  const paginateAsianModels = chunk(
    models
      .map((model) => ({ ...model }))
      .filter((model) => model.category == "Asia"),
    8
  );

  const paginateEuropeanModels = chunk(
    models
      .map((model) => ({ ...model }))
      .filter((model) => model.category == "European"),
    8
  );

  const itemAllModels = paginateAllModels[activePageAllModels - 1]?.map(
    (item) => ({
      ...item,
    })
  );

  const itemTVSpecialModels = paginateTVSpecial[activePageTVSpecial - 1]?.map(
    (item) => ({
      ...item,
    })
  );
  const itemLatinaModels = paginateLatinaModels[
    activePageLatinaModels - 1
  ]?.map((item) => ({
    ...item,
  }));
  const itemAsianModels = paginateAsianModels[activePageAsianModels - 1]?.map(
    (item) => ({
      ...item,
    })
  );
  const itemEuropeanModels = paginateEuropeanModels[
    activePageEuropeanModels - 1
  ]?.map((item) => ({
    ...item,
  }));

  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTop = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  };

  const giselleInfo = {
    name: "Giselle Capdevila",
    title: "Latina Beauty Queen 2012",
    image: "../images/homepageImages/giselleFrontImage.webp",
    description1:
      "Giselle Capdevila has an amazing story. Born and raised in Cuba, Giselle's family miraculously escaped Cuba in a small manmade boat in 2005, arriving days later to the shores of the USA under political asylum. Giselle soon moved to Las Vegas where she graduated high school and then began modeling for Ed Hardy, True Religion and Sketchers.",
    description2:
      "Giselle Capdevila has an amazing story. Born and raised in Cuba, Giselle's family miraculously escaped Cuba in a small manmade boat in 200",

    description3:
      "Giselle Capdevila has an amazing story. Born and raised in Cuba, Giselle's family miraculously escaped Cuba in a small manmade boat in 200",
  };

  const arianaInfo = {
    name: "Ariana Varela",
    title: "Asia Beauty Queen 2012",
    image: "../images/homepageImages/arianaFrontImage.webp",
    description1:
      "Ariana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were both Miss Monterey Park title holders and were in the Miss California U.S.A. Pageants, and Aunt Lisa Manibog went on to win the Miss Philippines U.S.A. and Miss Philippine International in Manila, which propelled her to the Miss International Pageant in Japan in 1983.",

    description2:
      " Ariana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were both Miss Monterey Park title holders and were in the Miss California U.S.A. Pageants, and Aunt Lisa Manibog went on to win the Miss Philippines U.S.A. and Miss Philippine International in Manila, which propelled her to the Miss International Pageant in Japan in 1983.",
    description3: "",
  };

  const kathrynInfo = {
    name: "Kathryn Stone",
    title: "Asia Beauty Queen 2012",
    image: "../images/kathryn.webp",
    description1:
      "Ariana's mAriana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were Ariana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were other, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were both Miss Monterey Park title holders and were in the Miss California U.S.A. Pageants, and Aunt Lisa Manibog went on to win the Miss Philippines U.S.A. and Miss Philippine International in Manila, which propelled her to the Miss International Pageant in Japan in 1983.",

    description2:
      " Ariana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were olders and were in the Miss California U.S.A. Pageants, and Aunt Lisa Manibog went on to win the Miss Philippines U.S.A. and Miss Philippine International in Manila, which propelled her to the Miss International Pageant in Japan in 1983.",
    description3:
      "ArianAriana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were aAriana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were 's mother, Ariana's mother, Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were Lana Manibog Varela, and her aunt, Lisa Manibog Brennan, were ",
  };

  return (
    <div style={{ margin: "0", padding: "0" }}>
      <div className={`${styles.flexContainer} ${styles.rhombus}`}>
        <div className={styles.videoContainer}>
          <video className={`${styles.video}  `} muted autoPlay loop>
            <source src="/videos/bqi_opener.mp4" />
          </video>
        </div>

        <div className={styles.videoHeading}>
          <Image
            className={styles.center}
            w={250}
            radius="lg"
            src="../images/tiara.png"
            alt="homepage video"
          />
          <Space h="sm" />
          <FadeInWhenVisible>
            <Title size={"5rem"} className={cormorant.className}>
              Beauty Queens
            </Title>

            <Space h="xs" />
            <Title size="5rem" className={allison.className}>
              International
            </Title>
          </FadeInWhenVisible>

          <Space h="xl" />
          <Space h="xl" />
          <FadeInWhenVisible>
            <Group c={"dimmed"} justify="center">
              <SiFacebook />
              <FaInstagramSquare />
              <SiYoutubemusic />
              <AiFillTikTok />
            </Group>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className={classes.mask}>
        <SimpleGrid className="mantine-hidden-from-sm" cols={1} h={450}>
          <Carousel2 slidesPerView={1} />
        </SimpleGrid>

        <SimpleGrid className="mantine-hidden-from-lg" cols={1} h={450}>
          <Carousel2 slidesPerView={4} />
        </SimpleGrid>

        <SimpleGrid className="mantine-visible-from-lg" cols={1} h={450}>
          <Carousel2 slidesPerView={6} />
        </SimpleGrid>
      </div>

      <div className={classes.mask}>
        <FeaturesCards />
      </div>

      <Container fluid bg={"black"}>
        <Container size={"xl"}>
          <EmailBanner modelInfo={kathrynInfo} />
        </Container>
        <Space h="xl" />
      </Container>

      <Space h="xl" />

      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <div>
          <FadeInWhenVisible>
            <EmailBanner modelInfo={giselleInfo} />
          </FadeInWhenVisible>
        </div>

        <div>
          <FadeInWhenVisible>
            <EmailBanner modelInfo={arianaInfo} />
          </FadeInWhenVisible>
        </div>
      </SimpleGrid>

      <Space h="xl" ref={scrollRef} />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />

      <Tabs defaultValue="TV Special">
        <Group justify="center" w="100%">
          <Tabs.List grow justify="center">
            <Tabs.Tab className={classes.test} value="All">
              <Text size="md" fw={700}>
                All
              </Text>
            </Tabs.Tab>
            <Tabs.Tab className={classes.test} value="TV Special">
              <Text size="md" fw={700}>
                TV Special
              </Text>
            </Tabs.Tab>
            <Tabs.Tab className={classes.test} value="Latina Models">
              <Text size="md" fw={700}>
                Latina
              </Text>
            </Tabs.Tab>
            <Tabs.Tab className={classes.test} value="Asia Models">
              <Text size="md" fw={700}>
                Asian
              </Text>
            </Tabs.Tab>
            <Tabs.Tab className={classes.test} value="European Models">
              <Text size="md" fw={700}>
                European
              </Text>
            </Tabs.Tab>
          </Tabs.List>
        </Group>

        <Tabs.Panel value="All">
          <Tabs.Panel value="All">
            <div className={classes.cardContainer} id="allModelsTOP">
              {itemAllModels?.map((model) => (
                <div key={model.slug}>
                  <FadeInWhenVisible>
                    <Card
                      shadow="sm"
                      p={0}
                      m={0}
                      w={350}
                      h={500}
                      component={Link}
                      href={`/models/${model.slug}`}
                      className={classes.cardContainer2}
                    >
                      <Card.Section>
                        <Image src={model.featured_image} alt={model.name} />
                        <Text> {model.featured_image}</Text>
                      </Card.Section>

                      <div className={classes.cardInfo2}>
                        <Text fw={500} size="lg" mt="md">
                          {model.name}
                        </Text>

                        <Text mt="xs" c="dimmed" size="sm">
                          {model.main_title}
                        </Text>
                        <Text mt="xs" c="dimmed" size="sm">
                          {model.height}
                        </Text>
                      </div>
                    </Card>
                  </FadeInWhenVisible>
                </div>
              ))}
            </div>
            <Space h="xl" />
            <Space h="xl" />
            <Group justify="center">
              <Pagination
                size="xl"
                radius="xl"
                total={paginateAllModels.length}
                value={activePageAllModels}
                onChange={setPageAllModels}
                onClick={scrollTop}
                mt="sm"
              />
            </Group>
          </Tabs.Panel>
        </Tabs.Panel>

        <Tabs.Panel value="TV Special">
          <div className={classes.cardContainer}>
            {itemTVSpecialModels?.map((model: any) => (
              <div key={model.slug}>
                <FadeInWhenVisible>
                  <Card
                    shadow="sm"
                    p={0}
                    m={0}
                    w={350}
                    h={500}
                    component={Link}
                    href={`/models/${model.slug}`}
                    className={classes.cardContainer2}
                  >
                    <Card.Section>
                      <Image src={model.featured_image} alt={model.name} />
                    </Card.Section>

                    <div className={classes.cardInfo2}>
                      <Text fw={500} size="lg" mt="md">
                        {model.name}
                      </Text>

                      <Text mt="xs" c="dimmed" size="sm">
                        {model.main_title}
                      </Text>
                      <Text mt="xs" c="dimmed" size="sm">
                        {model.height}
                      </Text>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              </div>
            ))}
          </div>
          <Space h="xl" />
          <Space h="xl" />
          <Group justify="center">
            <Pagination
              size="xl"
              radius="xl"
              total={paginateTVSpecial.length}
              value={activePageTVSpecial}
              onChange={setPageTVSpecial}
              onClick={scrollTop}
              mt="sm"
            />
          </Group>
        </Tabs.Panel>

        <Tabs.Panel value="Latina Models">
          <div className={classes.cardContainer}>
            {itemLatinaModels?.map((model) => (
              <div key={model.slug}>
                <FadeInWhenVisible>
                  <Card
                    shadow="sm"
                    p={0}
                    m={0}
                    w={350}
                    h={500}
                    component={Link}
                    href={`/models/${model.slug}`}
                    className={classes.cardContainer2}
                  >
                    <Card.Section>
                      <Image src={model.featured_image} alt={model.name} />
                    </Card.Section>

                    <div className={classes.cardInfo2}>
                      <Text fw={500} size="lg" mt="md">
                        {model.name}
                      </Text>

                      <Text mt="xs" c="dimmed" size="sm">
                        {model.main_title}
                      </Text>
                      <Text mt="xs" c="dimmed" size="sm">
                        {model.height}
                      </Text>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              </div>
            ))}
          </div>
          <Space h="xl" />
          <Space h="xl" />
          <Group justify="center">
            <Pagination
              size="xl"
              radius="xl"
              total={paginateLatinaModels.length}
              value={activePageLatinaModels}
              onChange={setPageLatinaModels}
              onClick={scrollTop}
              mt="sm"
            />
          </Group>
        </Tabs.Panel>

        <Tabs.Panel value="Asia Models">
          <div className={classes.cardContainer}>
            {itemAsianModels?.map((model) => (
              <div key={model.slug}>
                <FadeInWhenVisible>
                  <Card
                    shadow="sm"
                    p={0}
                    m={0}
                    w={350}
                    h={500}
                    component={Link}
                    href={`/models/${model.slug}`}
                    className={classes.cardContainer2}
                  >
                    <Card.Section>
                      <Image src={model.featured_image} alt={model.name} />
                    </Card.Section>

                    <div className={classes.cardInfo2}>
                      <Text fw={500} size="lg" mt="md">
                        {model.name}
                      </Text>

                      <Text mt="xs" c="dimmed" size="sm">
                        {model.main_title}
                      </Text>
                      <Text mt="xs" c="dimmed" size="sm">
                        {model.height}
                      </Text>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              </div>
            ))}
          </div>
          <Space h="xl" />
          <Space h="xl" />
          <Group justify="center">
            <Pagination
              size="xl"
              radius="xl"
              total={paginateAsianModels.length}
              value={activePageAsianModels}
              onChange={setPageAsianModels}
              onClick={scrollTop}
              mt="sm"
            />
          </Group>
        </Tabs.Panel>

        <Tabs.Panel value="European Models">
          <div className={classes.cardContainer}>
            {itemEuropeanModels?.map((model) => (
              <div key={model.slug}>
                <FadeInWhenVisible>
                  <Card
                    shadow="sm"
                    p={0}
                    m={0}
                    w={350}
                    h={450}
                    mah={450}
                    component={Link}
                    href={`/models/${model.slug}`}
                    className={classes.cardContainer2}
                  >
                    <Card.Section>
                      <Image
                        src={model.featured_image}
                        alt={model.name}
                        style={{ objectFit: "cover" }}
                      />
                    </Card.Section>

                    <div className={classes.cardInfo2}>
                      <Text fw={500} size="lg" mt="md">
                        {model.name}
                      </Text>

                      <Text mt="xs" c="dimmed" size="sm">
                        {model.main_title}
                      </Text>
                      <Text mt="xs" c="dimmed" size="sm">
                        {model.height}
                      </Text>
                    </div>
                  </Card>
                </FadeInWhenVisible>
              </div>
            ))}
          </div>
          <Space h="xl" />
          <Space h="xl" />
          <Group justify="center">
            <Pagination
              size="xl"
              radius="xl"
              total={paginateEuropeanModels.length}
              value={activePageEuropeanModels}
              onChange={setPageEuropeanModels}
              onClick={scrollTop}
              mt="sm"
            />
          </Group>
        </Tabs.Panel>
      </Tabs>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <ContactUs />
    </div>
  );
};

export default HomePage;
