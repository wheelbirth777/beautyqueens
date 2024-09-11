import {
  Breadcrumbs,
  Anchor,
  Container,
  SimpleGrid,
  Text,
  Title,
} from "@mantine/core";

const items = [
  { title: "Home", href: "/" },
  { title: "Press", href: "/press" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

export default function BreadCrumbs() {
  return (
    <>
      <Breadcrumbs>{items}</Breadcrumbs>
    </>
  );
}
