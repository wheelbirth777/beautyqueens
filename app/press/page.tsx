"use client";

import {
  Anchor,
  Breadcrumbs,
  Card,
  Container,
  Flex,
  Image,
  Modal,
  Space,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import Demo from "../modal/ModalTest";
import CarouselFrontPage from "../component/swiperjs/CarouselFrontPage/CarouselFrontPage";
import BreadCrumbs from "../ui/BreadCrumbs";

const itemsBreadCrumbs = [
  { title: "Home", href: "/" },
  { title: "Press", href: "/press" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

const page = () => {
  return (
    <>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Container>
        <Flex pb={"xl"} justify="center">
          <Breadcrumbs>{itemsBreadCrumbs}</Breadcrumbs>
        </Flex>

        <Title ta="center">Beauty Queen Press</Title>
        <Space h="xl" />
        <Demo />
        <Space h="xl" />
        <Space h="xl" />
      </Container>
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
      <Space h="xl" />
    </>
  );
};

export default page;
