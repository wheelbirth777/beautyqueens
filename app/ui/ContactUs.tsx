"use client";

import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  Container,
  BackgroundImage,
} from "@mantine/core";
import {
  IconBrandTwitter,
  IconBrandYoutube,
  IconBrandInstagram,
} from "@tabler/icons-react";
import { ContactIconsList } from "./ContactIcons";
import classes from "./ContactUs.module.css";

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];

export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon
      key={index}
      size={28}
      className={classes.social}
      variant="transparent"
    >
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));

  return (
    <div className={classes.mask}>
      <Container fluid pt="100" pl="0" pr="0">
        <BackgroundImage
          src="../images/bqbackground11.webp"
          pl="0"
          style={{ backgroundAttachment: "fixed" }}
        >
          <Container
            fluid
            bg="rgba(0,0,0, 0.6)"
            p={{ base: "0", sm: "10" }}
            pb="0"
            pt="200 "
          >
            <SimpleGrid
              p="xl"
              m="xl"
              cols={{ base: 1, sm: 2, md: 3, lg: 4 }}
              spacing={50}
            >
              <div>
                <Title className={classes.title}>Contact us</Title>
                <Text className={classes.description} mt="sm" mb={30}>
                  Leave your email and we will get back to you within 24 hours
                </Text>

                <ContactIconsList />

                <Group mt="xl">{icons}</Group>
              </div>
              <div className={classes.form}>
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  required
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                />
                <TextInput
                  label="Name"
                  placeholder="John Doe"
                  mt="md"
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                />
                <Textarea
                  required
                  label="Your message"
                  placeholder="I want to order your goods"
                  minRows={4}
                  mt="md"
                  classNames={{
                    input: classes.input,
                    label: classes.inputLabel,
                  }}
                />

                <Group justify="flex-end" mt="md">
                  <Button className={classes.control}>Send message</Button>
                </Group>
              </div>
            </SimpleGrid>
          </Container>
        </BackgroundImage>
      </Container>
    </div>
  );
}
