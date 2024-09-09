"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import EffectMaterial from "./effect-material.esm.js";
import "swiper/css";
import "swiper/css/a11y";
import "./effect-material.css";
import "./MySwiper.css";
import { Image } from "@mantine/core";
import Link from "next/link.js";

export default function CarouselFrontPage() {
  const swiperParameters = {
    modules: [A11y, EffectMaterial],
    slidesPerView: 3,
    spaceBetween: 16,
    effect: "material",
  };
  return (
    <div className="carouselFrontPage">
      <Swiper {...swiperParameters}>
        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <div class="swiper-material-content">
              <Image
                className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                data-swiper-material-scale="1.25"
                src="https://studio.swiperjs.com/demo-images/models/10.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  <Link href="/models/andrea-prias">Sabrina</Link>
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
                src="https://studio.swiperjs.com/demo-images/models/11.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Jane
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
                src="https://studio.swiperjs.com/demo-images/models/12.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Jessica
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
                src="https://studio.swiperjs.com/demo-images/models/13.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Kate
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
                src="https://studio.swiperjs.com/demo-images/models/14.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Margo
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
                src="https://studio.swiperjs.com/demo-images/models/15.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Mary
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
                src="https://studio.swiperjs.com/demo-images/models/16.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Helen
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
                src="https://studio.swiperjs.com/demo-images/models/17.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Nicole
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
                src="https://studio.swiperjs.com/demo-images/models/18.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Lara
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
                src="https://studio.swiperjs.com/demo-images/models/19.jpg"
                alt="MegaMenu"
              />

              <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                <div className="swiper-slide-text swiper-slide-text-bee6">
                  Kate
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
