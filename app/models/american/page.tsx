"use client";

import React from "react";

import { Card, Image, Tabs, Text } from "@mantine/core";
import { motion } from "framer-motion";
import classes from "./page.module.css";
import { Model } from "@/app/HomePage";
import prisma from "@/prisma/client";

const page = async () => {
  // const models: Model[] = await getModelsList();
  const models: Model[] = await prisma.model.findMany();

  return (
    <div>
      <div className={classes.cardContainer}>
        {models.map(
          (model) =>
            model.category == "American" && (
              <div key={model.slug}>
                <Card shadow="sm" padding="xl" component="a">
                  <Card.Section>
                    <Image src={model.featured_image} h={460} alt="No way!" />
                  </Card.Section>

                  <Text fw={500} size="lg" mt="md">
                    {model.name}
                  </Text>

                  <Text mt="xs" c="dimmed" size="sm">
                    {model.main_title}
                  </Text>
                  <Text mt="xs" c="dimmed" size="sm">
                    {model.height}
                  </Text>
                </Card>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default page;
