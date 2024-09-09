"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Scrollbar } from "swiper/modules";
import SwiperGL from "@/app/component/swiperjs/Carousel/swiper-gl.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./swiper-gl.css";
import "./MySwiper.css";
import { Image } from "@mantine/core";

export default function Carousel() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Navigation, Scrollbar, SwiperGL],
    rewind: true,
    effect: "gl",
    speed: 1200,
    navigation: true,
    autoplay: { enabled: true },
    scrollbar: true,
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/01.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Spider-Man: No Way Home
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/02.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Free Guy
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/03.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              The Nice Guys
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/04.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              John Wick
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/05.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Avatar
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/06.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Encanto
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/07.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Eternals
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/08.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Jurassic World
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/09.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Dr Strange
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-a38d">
          <Image
            alt="swiperImage"
            className="swiper-slide-bg-image swiper-slide-bg-image-c61b swiper-gl-image"
            src="https://studio.swiperjs.com/demo-images/movies/10.jpg"
          />

          <div className="swiper-slide-content swiper-slide-content-94be">
            <div className="swiper-slide-text swiper-slide-text-bee6">
              Guardians Of The Galaxy
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
