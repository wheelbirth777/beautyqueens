"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Scrollbar } from "swiper/modules";
import EffectMaterial from "./effect-material.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "./effect-material.css";
import "./MySwiper.css";
import { Image, Text } from "@mantine/core";
import Link from "next/link.js";

export default function Carousel2(props) {
  const swiperParameters = {
    modules: [A11y, Autoplay, Scrollbar, EffectMaterial],
    slidesPerView: props.slidesPerView,
    spaceBetween: 10,
    loop: true,
    effect: "material",
    autoplay: { enabled: true },
    lazy: { enabled: true },
  };
  return (
    <>
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/andrea-prias/p1.jpg"
                alt="Andrea"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Andrea
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/kathryn-stone/p1.jpg"
                alt="Kathryn"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Kathryn
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/ariana-varela/featured_image.jpg"
                alt="Ariana"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Ariana
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/giselle-capdevila/featured_image.jpg"
                alt="Giselle"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Giselle
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/lais-de-leon/featured_image.jpg"
                alt="Lais De Leon"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Lais
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/vanda-dita-gallo/p5.jpg"
                alt="Vanda Dita Gallo"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Vanda
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/marketa-janska/featured_image.jpg"
                alt="Marketa Janska"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Marketa
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/lilian-aguilar/p4.jpg"
                alt="Marketa Janska"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Lilian
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="../models/images/sally/p1.jpg"
                alt="Marketa Janska"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Sally
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
