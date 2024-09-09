import { SegmentedControl } from "@mantine/core";

export default function TabControl() {
  return (
    <SegmentedControl
      color="gray"
      data={["React", "Angular", "Vue", "Svelte"]}
    />
  );
}
