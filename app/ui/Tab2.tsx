import { Tabs } from "@mantine/core";

export default function Tab2() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List grow justify="center">
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
