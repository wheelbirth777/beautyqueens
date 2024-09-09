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
import LasVegasEvent from "./lasvegasevent/LasVegasEvent";
import BahamasEvent from "./bahamasevent/BahamasEvent";
import classes from "./page.module.css";

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

const Page = () => {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <Container fluid>
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

      <Space h="xl" />
      <Container size={"xl"}>
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <SimpleGrid cols={1}>
          <div>
            <BahamasEvent />
          </div>
        </SimpleGrid>
        <Space h="xl" />
        <Space h="xl" />
        <Space h="xl" />
        <SimpleGrid cols={1} pb={"200px"}>
          <div>
            <LasVegasEvent />
          </div>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default Page;
