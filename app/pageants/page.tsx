"use client";

import React from "react";
import Masonry from "../component/masonry/Masonry";
import VideoLightbox from "../component/videoLightbox/VideoLightbox";
import { Container, Image, SimpleGrid, Space, Title } from "@mantine/core";

import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { FeaturesCards } from "../ui/FeaturesCards";
import Carousel2 from "../component/swiperjs/Carousel2/Carousel2";
import SliderImage from "../component/SliderImage";

const data = [
  "../images/bqpageants/bqimage1.webp",

  "../images/bqpageants/bqimage2.webp",

  "../images/bqpageants/bqimage3.webp",

  "../images/bqpageants/bqimage4.webp",

  "../images/bqpageants/bqimage5.webp",

  "../images/bqpageants/bqimage6.webp",

  "../images/bqpageants/bqimage7.webp",
  "../images/bqpageants/bqimage8.webp",
];

const photos = data.map((d) => {
  const result = {
    src: d,
    width: 800,
    height: 600,
  };
  return result;
});

const Page = () => {
  const [index, setIndex] = useState(-1);
  return (
    <Container fluid>
      <Container size="xl" pt={"xl"} p={0}>
        <SimpleGrid cols={1} p={0}>
          <div>
            <video width="100%" muted autoPlay loop>
              <source src="/videos/bqi_opener.mp4" />
            </video>
          </div>
        </SimpleGrid>

        <SimpleGrid cols={1} h={450} bg={"black"}>
          <Carousel2 slidesPerView={5} />
        </SimpleGrid>
      </Container>

      <Container size={"xl"}>
        <Space h="xl" />
        <Space h="xl" />
        <Title>Gallery</Title>
        <Space h="xl" />
        <SimpleGrid cols={1}>
          <div>
            <PhotoAlbum
              layout="masonry"
              photos={photos}
              targetRowHeight={150}
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
        <Space h="xl" />
        <Space h="xl" />
      </Container>
    </Container>
  );
};

export default Page;
