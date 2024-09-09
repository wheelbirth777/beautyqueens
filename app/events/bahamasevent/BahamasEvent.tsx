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
import LasVegasEvent from "@/app/events/lasvegasevent/LasVegasEvent";
const photosBahamas = [
  {
    src: "../images/bahamasevents/bahamas2.webp",
    width: 700,
    height: 350,
  },
  {
    src: "../images/bahamasevents/bahamas3.webp",
    width: 525,
    height: 325,
  },
  {
    src: "../images/bahamasevents/bahamas4.webp",
    width: 1034,
    height: 530,
  },
  {
    src: "../images/bahamasevents/bahamas5.webp",
    width: 508,
    height: 222,
  },
  {
    src: "../images/bahamasevents/bahamas6.webp",
    width: 486,
    height: 342,
  },
  {
    src: "../images/bahamasevents/bahamas7.webp",
    width: 348,
    height: 434,
  },
  {
    src: "../images/bahamasevents/bahamas8.webp",
    width: 524,
    height: 236,
  },
  {
    src: "../images/bahamasevents/bahamas9.webp",
    width: 526,
    height: 348,
  },

  {
    src: "../images/bahamasevents/bahamas10.webp",
    width: 684,
    height: 522,
  },
  {
    src: "../images/bahamasevents/bahamas11.webp",
    width: 410,
    height: 532,
  },
  {
    src: "../images/bahamasevents/bahamas12.webp",
    width: 684,
    height: 522,
  },
];

const BahamasEvent = () => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <SimpleGrid cols={1}>
        <Title>Bahamas Event</Title>
        <Space h="xl" />
        <div>
          <PhotoAlbum
            layout="masonry"
            photos={photosBahamas}
            targetRowHeight={150}
            onClick={({ index }) => setIndex(index)}
          />
          <Lightbox
            slides={photosBahamas}
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

export default BahamasEvent;
