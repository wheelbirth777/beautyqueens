import { Tabs, Title, rem } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import classes from "@/app/ui/Tabs2.module.css";
export default function Tabs2() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs color="none" variant="pills" radius="xl" defaultValue="gallery">
      <Tabs.List>
        <Tabs.Tab className={classes.test} value="gallery">
          All Models
        </Tabs.Tab>
        <Tabs.Tab className={classes.test} value="messages">
          Latina Models
        </Tabs.Tab>
        <Tabs.Tab className={classes.test} value="settings">
          Asia Models
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">Gallery tab content</Tabs.Panel>

      <Tabs.Panel value="messages">Messages tab content</Tabs.Panel>

      <Tabs.Panel value="settings">Settings tab content</Tabs.Panel>
    </Tabs>
  );
}
