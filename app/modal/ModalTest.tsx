"use client";
import { useDisclosure } from "@mantine/hooks";
import {
  Modal,
  Button,
  Image,
  Container,
  Card,
  Text,
  SimpleGrid,
  Group,
} from "@mantine/core";
import CarouselFrontPage from "../component/swiperjs/CarouselFrontPage/CarouselFrontPage";

export default function Demo() {
  const [openedArticle1, { open: openArticle1, close: closeArticle1 }] =
    useDisclosure(false);
  const [openedArticle2, { open: openArticle2, close: closeArticle2 }] =
    useDisclosure(false);

  const [openedArticle3, { open: openArticle3, close: closeArticle3 }] =
    useDisclosure(false);
  const [openedArticle4, { open: openArticle4, close: closeArticle4 }] =
    useDisclosure(false);

  return (
    <>
      <Container>
        <Modal
          opened={openedArticle1}
          onClose={closeArticle1}
          title="Artile 1"
          size={"xxl"}
          zIndex={99999999999}
        >
          <Image src="../images/press/article1.jpg" alt="image" />
        </Modal>

        <Modal
          opened={openedArticle2}
          onClose={closeArticle2}
          title="Article 2"
          size={"xxl"}
          zIndex={99999999999}
        >
          <Image src="../images/press/article2.jpg" alt="image" />
        </Modal>

        <Modal
          opened={openedArticle3}
          onClose={closeArticle3}
          title="Article 3"
          size={"xxl"}
          zIndex={99999999999}
        >
          <Image src="../images/press/article3.jpg" alt="image" />
        </Modal>

        <Modal
          opened={openedArticle4}
          onClose={closeArticle4}
          title="Article 4"
          size={"xxl"}
          zIndex={99999999999}
        >
          <Image src="../images/press/article4.jpg" alt="image" />
        </Modal>
      </Container>

      <Container fluid>
        <SimpleGrid cols={2}>
          <Card
            shadow="md"
            radius="md"
            padding="xl"
            maw={500}
            onClick={openArticle1}
          >
            <Image src="../images/press/article1.jpg" alt="test"></Image>

            <Text fz="lg" fw={500} mt="md">
              Battle Of The Beauty Queens
            </Text>
            <Text fz="sm" c="dimmed">
              by Beauty Queen TV
            </Text>
          </Card>

          <Card
            shadow="md"
            radius="md"
            padding="xl"
            maw={500}
            onClick={openArticle2}
          >
            <Image src="../images/press/article2.jpg" alt="test"></Image>
            <Text fz="lg" fw={500} mt="md">
              Tradeshow Lifestyles
            </Text>

            <Text fz="sm" c="dimmed">
              June 2012
            </Text>
          </Card>

          <Card
            shadow="md"
            radius="md"
            padding="xl"
            maw={500}
            onClick={openArticle3}
          >
            <Image src="../images/press/article3.jpg" alt="test"></Image>
            <Text fz="lg" fw={500} mt="md">
              Tradeshow Lifestyles
            </Text>

            <Text fz="sm" c="dimmed">
              May 2012
            </Text>
          </Card>

          <Card
            shadow="md"
            radius="md"
            padding="xl"
            maw={500}
            onClick={openArticle4}
          >
            <Image src="../images/press/article4.jpg" alt="test"></Image>
            <Text fz="lg" fw={500} mt="md">
              Battle Of The Beauty Queens
            </Text>
            <Text fz="lg" fw={500} c="dimmed">
              Worldwide TV Broadcast
            </Text>
            <Text fz="sm" c="dimmed">
              by Jessica Fire
            </Text>
          </Card>
        </SimpleGrid>
      </Container>
    </>
  );
}
