"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import SwiperGL from "./swiper-gl.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./swiper-gl.css";
import "./MySwiper.css";
import { Image } from "@mantine/core";

export default function CarouselGL() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Navigation, Scrollbar, SwiperGL],
    effect: "gl",
    speed: 1200,
    navigation: true,
    autoplay: { enabled: true },
    scrollbar: true,
    watchSlidesProgress: true,

    onBeforeInit(swiper) {
      swiper.params.gl = { shader: "flyeye" };
    },
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-a38d">
          <Image
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="../images/banners/slide1.jpg"
            alt="slide1"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Spider-Man: No Way Home
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="../images/banners/slide2.jpg"
            alt="slide2"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Free Guy
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="../images/banners/slide3.jpg"
            alt="slide3"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              The Nice Guys
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="../images/banners/slide4.jpg"
            alt="slide4"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              John Wick
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="../images/banners/slide5.jpg"
            alt="slide5"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Avatar
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
