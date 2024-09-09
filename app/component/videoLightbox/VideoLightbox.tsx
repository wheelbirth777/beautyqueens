"use client";

import { Image } from "@mantine/core";
import React from "react";

import Lightbox from "yet-another-react-lightbox";
import Video from "yet-another-react-lightbox/plugins/video";
import "yet-another-react-lightbox/styles.css";

const VideoLightbox = () => {
  return (
    <div>
      <Lightbox
        plugins={[Video]}
        slides={[
          {
            type: "video",
            width: 1280,
            height: 720,
            poster: "/public/poster-image.jpg",
            sources: [
              {
                src: "/public/pageants.mp4",
                type: "video/mp4",
              },
            ],
          },
          // ...
        ]}
        // ...
      />
    </div>
  );
};

export default VideoLightbox;
