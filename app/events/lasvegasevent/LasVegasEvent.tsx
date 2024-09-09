"use client";

import React, { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Container, SimpleGrid, Space, Title } from "@mantine/core";

const photosLasVegas = [
  {
    src: "../images/lasvegasevents/lasvegas1.webp",
    width: 592,
    height: 336,
  },
  {
    src: "../images/lasvegasevents/lasvegas2.webp",
    width: 432,
    height: 312,
  },
  {
    src: "../images/lasvegasevents/lasvegas3.webp",
    width: 1052,
    height: 406,
  },
  {
    src: "../images/lasvegasevents/lasvegas4.webp",
    width: 368,
    height: 300,
  },

  {
    src: "../images/lasvegasevents/lasvegas6.webp",
    width: 584,
    height: 336,
  },
  {
    src: "../images/lasvegasevents/lasvegas7.webp",
    width: 492,
    height: 286,
  },
];

const LasVegasEvent = () => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <SimpleGrid cols={1}>
        <Title>Las Vegas Event</Title>
        <Space h="xl" />
        <div>
          <PhotoAlbum
            layout="masonry"
            photos={photosLasVegas}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />
          <Lightbox
            slides={photosLasVegas}
            open={index >= 0}
            index={index}
            close={() => setIndex(-1)}
            // enable optional lightbox plugins
            plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
          />
        </div>
      </SimpleGrid>
    </>
  );
};

export default LasVegasEvent;
