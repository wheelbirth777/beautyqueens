import CarouselGL from "@/app/component/swiperjs/CarouselGL/CarouselGL";
import {
  Container,
  Image,
  SimpleGrid,
  Space,
  Text,
  Title,
} from "@mantine/core";
import React from "react";

const page = () => {
  return (
    <>
      <Container fluid>
        <Container size="xl" h="500px" mb={"xl"}>
          <CarouselGL />
        </Container>

        <Container size={"xl"} pb={"200px"}>
          <Space h="xl" />
          <Container size={"sm"}>
            <Title order={3} mt={"xl"} ta="center">
              Germany To Host The 2014
            </Title>
            <Title order={3} ta={"center"}>
              Miss Intercontinental ® Pageant
            </Title>
          </Container>
          <Space h="xl" />
          <Space h="xl" />
          <SimpleGrid cols={2} spacing={"xl"}>
            <div>
              <Text
                c={"dimmed"}
                style={{ textAlign: "justify", textIndent: "50px" }}
              >
                <Image
                  src="../images/news/continental1.jpg"
                  alt="doralmiami"
                  maw="250px"
                  height="auto"
                  mr={"30px"}
                  style={{ display: "inline", float: "left" }}
                />
                PANAMA (October 6, 2014) – WBO – World Beauty Organization
                President, Luis Pitti Sagrera, announced today the 43rd Annual
                MISS INTERCONTINENTAL® Competition will be aired live on
                December 4, 2014 from Germany. As Jordan was cancelling in last
                minute the pageant due safety problems, the WBO reacted
                immediately and signed a contract with the German Director to
                stage the pageant once more in Germany. The glamorous live
                event, featuring the most beautiful women of all continents,
                will air in co-production of EKIP Media Group on December 4th
                from the MARITIM HOTEL and CONGRESS in Magdeburg.
              </Text>
              <Space h="xl" />
              <Text
                c={"dimmed"}
                style={{ textAlign: "justify", textIndent: "50px" }}
              >
                “I am very pleased to announce our partnership with media
                conglomerate EKIP MEDIA who will air with 8 Cameras from
                Magdeburg and with the Maritim Hotel,” said the pageant’s owner,
                Luis Pitti Sagrera. “Germany is an economic powerhouse and at
                all it is a safe place to do go and to do business. This is our
                second time in the city Magdeburg.”
              </Text>

              <Space h="xl" />
              <Text
                c={"dimmed"}
                style={{ textAlign: "justify", textIndent: "50px" }}
              >
                After Jordan there was just one city in my mind which could
                provide what we are looking for, exclusive rooms, excellent food
                and an amazing ballroom and that was the place we enjoyed
                already last year and had a wonderful experience. We are looking
                forward showing the Contestants, and the viewers at home and
                around the world the exciting and solid culture of our beautiful
                country.” Detlef Tursies said after the announcement.
              </Text>
            </div>

            <div>
              <Text
                c={"dimmed"}
                style={{ textAlign: "justify", textIndent: "50px" }}
              >
                <Image
                  src="../images/news/continental2.jpg"
                  alt="doralmiami"
                  maw="250px"
                  height="auto"
                  mr={"30px"}
                  style={{ display: "inline", float: "left" }}
                />
                Contestants from 70 countries of 5 continents will travel to
                Germany for almost 2 weeks of activities leading up to the
                telecast. They will be judged in three categories: swimsuit,
                evening gown and interview, as they vie for the coveted title of
                Miss Intercontinental 2014.
              </Text>

              <Space h="xl" />
              <Text
                c={"dimmed"}
                style={{ textAlign: "justify", textIndent: "50px" }}
              >
                This is not the first time in its 43-year history the Miss
                Intercontinental contest will be held in Germany. The last
                years, Venezolana, Daniela Chalbaud, Miss Intercontinental 2012,
                was crowned at the Eurogress Convention Center in Aachen and
                Ekaterina Plekhova from Russia was crowned last year at same
                place like this year, the “Maritim Hotel and Congress” and will
                now crown her successor at the conclusion of the telecast on
                December 4th.
              </Text>
              <Space h="xl" />
              <Space h="xl" />
              <Space h="xl" />
              <Text c={"dimmed"}>About MISS INTERCONTINENTAL®</Text>
              <Space h="xl" />
              <Text
                c={"dimmed"}
                style={{ textAlign: "justify", textIndent: "50px" }}
              >
                <Image
                  src="../images/news/continental4.jpg"
                  alt="doralmiami"
                  maw="250px"
                  height="auto"
                  mr={"30px"}
                  style={{ display: "inline", float: "left" }}
                />
                The MISS INTERCONTINENTAL® pageant is a contest of the WBO World
                Beauty Organization and owner Luis Pitti Sagrera. Information,
                visit: www.missintercontinental.com.
              </Text>
            </div>
          </SimpleGrid>
        </Container>
      </Container>
    </>
  );
};

export default page;
