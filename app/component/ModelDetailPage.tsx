"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./styles.css";
import classes from "./modeldetail.module.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import {
  Anchor,
  Breadcrumbs,
  Container,
  Flex,
  Group,
  Image,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import SliderImage from "./SliderImage";
import ThumbsGallery from "./swiperjs/ThumbsGallery/ThumbsGallery";
import FadeInWhenVisible from "../ui/FadeInWhenVisible";
import Carousel2 from "./swiperjs/Carousel2/Carousel2";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

interface Model {
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

interface ModelProps {
  model: Model;
}

export default function ModelDetailPage(props: ModelProps) {
  const model = props.model;
  const images = props.model.images;
  console.log(model);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const modelName = model.name;
  const modelSlug = model.slug;

  const itemsBreadCrumbs = [
    { title: "Home", href: "/" },
    { title: "Models", href: "/models" },
    { title: modelName, href: modelSlug },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView();
    }
  }, []);

  const [index, setIndex] = useState(-1);

  const photos = images.map((imageURL) => {
    const result = {
      src: imageURL,
      width: 600,
      height: 800,
    };
    return result;
  });

  return (
    <Container fluid pt="70px">
      <SimpleGrid cols={1} h={450}>
        <Carousel2 />
      </SimpleGrid>

      <div ref={scrollRef}>
        <Container size="65%" pt="100px" mih="1200px">
          <Flex pb={"xl"} justify="center">
            <Breadcrumbs>{itemsBreadCrumbs}</Breadcrumbs>
          </Flex>
          <Space h="xl" />
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing="100px"
            verticalSpacing="xs"
          >
            <div className="container">
              <div className={classes.leftContent}>
                <Title>{model.name}</Title>
                <Text>{model.main_title}</Text>
                {model.titles?.map((title) => (
                  <Text key={title}>{title}</Text>
                ))}
                <Space h="xl" />
                <Space h="xl" />
                <Text c="dimmed">{model.short_description}</Text>
                <Space h="lg" />
                <Text c="dimmed"> {model.desc_paragraph1}</Text>
                <Space h="lg" />
                <Text c="dimmed"> {model.desc_paragraph2}</Text>
                <Space h="lg" />
                <Text c="dimmed"> {model.desc_paragraph3}</Text>
                <Space h="lg" />
                <Text c="dimmed"> {model.desc_paragraph4}</Text>
                <Space h="lg" />
                <Space h="lg" />
                <Group bg="white" justify="center" align="center" p="20px">
                  <div style={{ textAlign: "center" }}>
                    <Title c="dark" size="1.5rem">
                      {!model.height ? "" : "Height"}
                    </Title>
                    <Text fs="italic" c="dark">
                      {model.height}
                    </Text>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Title c="dark" size="1.5rem">
                      {!model.eyes ? "" : "Eyes"}
                    </Title>

                    <Text fs="italic" c="dark">
                      {model.eyes}
                    </Text>

                    <Text fs="italic" c="dark"></Text>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Title c="dark" size="1.5rem">
                      {!model.hair ? "" : "Hair"}
                    </Title>

                    <Text fs="italic" c="dark">
                      {model.hair}
                    </Text>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Title c="dark" size="1.5rem">
                      {!model.category ? "" : "Category"}
                    </Title>

                    <Text fs="italic" c="dark">
                      {model.category}
                    </Text>
                  </div>
                </Group>
              </div>
            </div>

            <div>
              <FadeInWhenVisible>
                <Image alt={model.name} src={model.featured_image} />
              </FadeInWhenVisible>
            </div>
          </SimpleGrid>
        </Container>
      </div>

      <Container size={"xl"} p={60}>
        <Title>Gallery</Title>
        <Space h="xl" />
        <SimpleGrid cols={1}>
          <div className="test">
            <PhotoAlbum
              layout="masonry"
              photos={photos}
              onClick={({ index }) => setIndex(index)}
            />
            <Lightbox
              slides={photos}
              open={index >= 0}
              index={index}
              close={() => setIndex(-1)}
              // enable optional lightbox plugins
              plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
          </div>
        </SimpleGrid>
      </Container>

      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </Container>
  );
}
