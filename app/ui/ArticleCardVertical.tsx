"use client";

import {
  Card,
  Image,
  Avatar,
  Text,
  Group,
  Container,
  Title,
  Flex,
  SimpleGrid,
} from "@mantine/core";
import classes from "./ArticleCardVertical.module.css";

export function ArticleCardVertical() {
  return (
    <Container fluid>
      <SimpleGrid cols={{ base: 1, sm: 2 }}>
        <div>
          <Card radius="md" p={0} className={classes.card}>
            <Group wrap="nowrap" gap={0}>
              <Image
                src="../models/images/ariana-varela/featured_image.jpg"
                height={500}
                alt="Ariana Varela"
              />
              <div className={classes.body}>
                <Title c="white" order={1}>
                  Ariana Varela
                </Title>
                <Text tt="uppercase" c="dimmed" fw={700} size="xl"></Text>
                <Text className={classes.title} mt="xs" mb="md">
                  Asia Beauty Queen 2011
                </Text>

                <Group wrap="wrap" gap="xs">
                  <Text size="xs" c="dimmed">
                    Arianas mother, Lana Manibog Varela, and her aunt, Lisa
                    Manibog Brennan, were both Miss Monterey Park title holders
                    and were in the Miss California U.S.A. Pageants, and Aunt
                    Lisa Manibog went on to win the Miss Philippines U.S.A. and
                    Miss Philippine International in Manila, which propelled her
                    to the Miss International Pageant in Japan in 1983.
                  </Text>

                  <Text size="xs" c="dimmed">
                    Her cousin, Francel Manibog Caracol, was also Miss Monterey
                    Park, and eventually, won a runner up position in the Miss
                    World Beauty Pageant in London in 1986.
                  </Text>
                </Group>
              </div>
            </Group>
          </Card>
        </div>
        <div>
          <Card radius="md" p={0} className={classes.card}>
            <Group wrap="nowrap" gap={0}>
              <Image
                src="../models/images/giselle-capdevila/featured_image.jpg"
                height={500}
                alt="Giselle Capdevila"
              />
              <div className={classes.body}>
                <Title c="white" order={1}>
                  Giselle Capdevila
                </Title>
                <Text tt="uppercase" c="dimmed" fw={700} size="xl"></Text>
                <Text className={classes.title} mt="xs" mb="md">
                  Cuba 2015
                </Text>

                <Group wrap="wrap" gap="xs">
                  <Text size="xs" c="dimmed">
                    Giselle Capdevila has an amazing story. Born and raised in
                    Cuba, Giselles family miraculously escaped Cuba in a small
                    manmade boat in 2005, arriving days later to the shores of
                    the USA under political asylum.
                  </Text>

                  <Text size="xs" c="dimmed">
                    Giselle soon moved to Las Vegas where she graduated high
                    school and then began modeling for Ed Hardy, True Religion
                    and Sketchers.
                  </Text>
                </Group>
              </div>
            </Group>
          </Card>
        </div>
      </SimpleGrid>
    </Container>
  );
}
