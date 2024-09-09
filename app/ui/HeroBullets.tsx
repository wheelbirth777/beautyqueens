"use client";

import {
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
  BackgroundImage,
  Flex,
  SimpleGrid,
  Space,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons-react";

import classes from "./HeroBullets.module.css";

export function HeroBullets() {
  return (
    <>
      <Container fluid className={classes.backg} p="0" pb="xl" pt="xl">
        <BackgroundImage src="../images/bqbackground3.webp">
          <Container fluid bg="rgba(25,25,150, 0.2)">
            <Container size="xl">
              <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
                <Space h="xl" />
                <Space h="xl" />
                <Space h="xl" />
                <Space h="xl" />
                <div>
                  <Title className={classes.title}>
                    <span className={classes.highlight}>Welcome</span>
                    <br /> my fellow Beauty Queens!
                  </Title>
                  <Text c="dimmed" mt="md">
                    Now that the majority of the worlds most popular beauty
                    contests are held in Las Vegas it makes sense that a Beauty
                    Academy would be established here someday.
                  </Text>

                  <Text c="dimmed" mt="md">
                    Now that the majority of the worlds most popular beauty
                    contests are held in Las Vegas it makes sense that a Beauty
                    Academy would be established here someday.
                  </Text>

                  <Text c="dimmed" mt="md">
                    That day is arriving soon. The Beauty Queen Academy,
                    starting in 2015 will be specializing in training students
                    from overseas who are seeking acting, singing and dancing
                    lessons while living in the United States and actively
                    pursuing careers in television, film and theatre.
                  </Text>
                  <Text c="dimmed" mt="md">
                    We have found that Las Vegas is an ideal location for an
                    acting and beauty queen academy.
                  </Text>

                  <Text c="dimmed" mt="md">
                    Please contact us if you think you have the qualifications
                    to attend our Beauty Queen Academy or you wish to attend one
                    of the popular Beauty Contests in Las Vegas - the Capital of
                    Beauty Pageants from around the World!
                  </Text>
                </div>
                <div>
                  <Image
                    src="../images/kathryn.png"
                    className={classes.image}
                    alt="kathryn"
                  />
                </div>
              </SimpleGrid>
            </Container>
          </Container>
        </BackgroundImage>
      </Container>
    </>
  );
}
