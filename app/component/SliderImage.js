"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, FreeMode, Pagination } from "swiper/modules";
import classes from "./SliderImage.module.css";

import "swiper/css";
import "swiper/css/a11y";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import Link from "next/link";
import { Anchor, Container, Image } from "@mantine/core";

//import "./MySwiper.css";

export default function SliderImage() {
  const [slideCaption, setSlideCaption] = useState(false);

  const swiperParameters = {
    modules: [A11y, Autoplay, FreeMode, Pagination],
    slidesPerView: 5,
    loop: true,
    watchSlidesProgress: true,
    autoplay: { pauseOnMouseEnter: true, delay: 5000, enabled: true },
    slidesPerGroupAuto: false,

    lazy: { enabled: true },
    freeMode: { sticky: true, enabled: true },
    spaceBetween: 20,
  };

  const swiperParametersMobile = {
    modules: [A11y, Autoplay, FreeMode, Pagination],
    slidesPerView: 1,
    loop: true,
    watchSlidesProgress: true,
    autoplay: { pauseOnMouseEnter: true, delay: 5000, enabled: true },
    slidesPerGroupAuto: false,

    lazy: { enabled: true },
    freeMode: { sticky: true, enabled: true },
    spaceBetween: 5,
  };

  const handleCaption = () => {
    const toggle = slideCaption;
    setSlideCaption(!toggle);
  };
  return (
    <>
      <Container hiddenFrom="xs" fluid p="0">
        <Swiper {...swiperParametersMobile}>
          <SwiperSlide className="swiper-slide-3f3  ${classes.spacing">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/alicia-caldwell#TOP">
                  <Image
                    src="../models/images/alicia-caldwell/featured_image.jpg"
                    alt="alicia"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/lais-de-leon#TOP">
                  <Image
                    src="../models/images/lais-de-leon/featured_image.jpg"
                    alt="lais"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/giselle-capdevila#TOP">
                  <Image
                    src="../models/images/giselle-capdevila/featured_image.jpg"
                    alt="giselle"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/ariana-varela#TOP">
                  <Image
                    src="../models/images/ariana-varela/featured_image.jpg"
                    alt="ariana"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/kathryn-stone#TOP">
                  <Image
                    src="../models/images/kathryn-stone/kathryn.webp"
                    alt="kathryn"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/andrea-prias#TOP">
                  <Image
                    src="../models/images/andrea-prias/featured_image.jpg"
                    alt="kathryn"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/andrea-prias#TOP">
                  <Image
                    src="../models/images/andrea-prias/featured_image.jpg"
                    alt="kathryn"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/andrea-prias#TOP">
                  <Image
                    src="../models/images/andrea-prias/featured_image.jpg"
                    alt="kathryn"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination" />
      </Container>

      <Container visibleFrom="xs" fluid p="0">
        <Swiper {...swiperParameters}>
          <SwiperSlide className="swiper-slide-3f3  ${classes.spacing">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/alicia-caldwell#TOP">
                  <Image
                    src="../models/images/alicia-caldwell/featured_image.jpg"
                    alt="alicia"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/lais-de-leon#TOP">
                  <Image
                    src="../models/images/lais-de-leon/featured_image.jpg"
                    alt="lais"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/giselle-capdevila#TOP">
                  <Image
                    src="../models/images/giselle-capdevila/featured_image.jpg"
                    alt="giselle"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/ariana-varela#TOP">
                  <Image
                    src="../models/images/ariana-varela/featured_image.jpg"
                    alt="ariana"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/kathryn-stone#TOP">
                  <Image
                    src="../models/images/kathryn-stone/kathryn.webp"
                    alt="kathryn"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/andrea-prias#TOP">
                  <Image
                    src="../models/images/andrea-prias/featured_image.jpg"
                    alt="kathryn"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/andrea-prias#TOP">
                  <Image
                    src="../models/images/andrea-prias/featured_image.jpg"
                    alt="kathryn"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="swiper-slide-3f38">
            <div className="swiper-slide-content swiper-slide-content-cd26">
              <div className="swiper-slide-text swiper-slide-text-79be">
                <Anchor component={Link} href="/models/andrea-prias#TOP">
                  <Image
                    src="../models/images/andrea-prias/featured_image.jpg"
                    alt="kathryn"
                    className={classes.spacing}
                  />
                </Anchor>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination" />
      </Container>
    </>
  );
}
