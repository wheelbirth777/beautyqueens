"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Scrollbar } from "swiper/modules";
import EffectMaterial from "./effect-material.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "./effect-material.css";
import "./MySwiper.css";
import { Image } from "@mantine/core";
import Link from "next/link.js";

export default function Carousel2() {
  const swiperParameters = {
    modules: [A11y, Autoplay, Scrollbar, EffectMaterial],
    slidesPerView: 4,
    spaceBetween: 16,
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
                src="../models/images/andrea-prias/featured_image.jpg"
                alt="MegaMenu"
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
                src="../models/images/kathryn-stone/featured_image.jpg"
                alt="MegaMenu"
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
                alt="MegaMenu"
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
                alt="MegaMenu"
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
                alt="MegaMenu"
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
                src="../models/images/vanda-dita-gallo/featured_image.jpg"
                alt="MegaMenu"
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
                src="../models/images/vanda-dita-gallo/featured_image.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Vanda
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
