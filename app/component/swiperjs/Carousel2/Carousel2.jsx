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
import { Inter, Cormorant, Allison } from "next/font/google";
const allison = Allison({ weight: "400", subsets: ["latin"] });

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
            <Link href="/models/andrea-prias">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/andrea-prias/p1.jpg"
                  alt="Andrea"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Andrea
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <Link href="/models/kathryn-stone">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/kathryn-stone/p1.jpg"
                  alt="Kathryn"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Kathryn
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <Link href="/models/ariana-varela">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/ariana-varela/featured_image.jpg"
                  alt="Ariana"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Ariana
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <Link href="/models/giselle-capdevila">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/giselle-capdevila/featured_image.jpg"
                  alt="Giselle"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Giselle
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <Link href="/models/lais-de-leon">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/lais-de-leon/featured_image.jpg"
                  alt="Lais De Leon"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Lais
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <Link href="/models/vanda-dita-gallo">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/vanda-dita-gallo/p5.jpg"
                  alt="Vanda Dita Gallo"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Vanda
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <Link href="/models/marketa-janska">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/marketa-janska/featured_image.jpg"
                  alt="Marketa Janska"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Marketa
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <Link href="/models/lilian-aguilar">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/lilian-aguilar/p4.jpg"
                  alt="Lilian"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Lilian
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide className="swiper-slide-91ee">
          <div class="swiper-material-wrapper">
            <Link href="/models/sally">
              <div class="swiper-material-content">
                <Image
                  className="swiper-slide-bg-image swiper-slide-bg-image-c61b"
                  data-swiper-material-scale="1.25"
                  src="../models/images/sally/p1.jpg"
                  alt="Sally"
                />

                <div className="swiper-slide-content swiper-material-animate-opacity swiper-slide-content-609f">
                  <div className="swiper-slide-text swiper-slide-text-bee6">
                    <Text size="4rem" className={allison.className}>
                      Sally
                    </Text>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
