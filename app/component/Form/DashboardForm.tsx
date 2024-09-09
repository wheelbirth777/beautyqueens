"use client";
import { useForm } from "@mantine/form";
import { NumberInput, TextInput, Button, Text, Code } from "@mantine/core";
import { useState } from "react";

export default function DashboardForm() {
  const [productName, setProductName] = useState("");
  const [submittedValues, setSubmittedValues] = useState<
    typeof form.values | null
  >(null);

  const form = useForm({
    mode: "uncontrolled",
    initialValues: { product_name: "", description: "", price: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      product_name: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      description: (value) =>
        value.length < 2 ? "Name must have at least 2 letters" : null,
      price: (value) =>
        value < 18 ? "You must be at least 18 to register" : null,
    },
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(JSON.stringify(submittedValues));
  };

  return (
    <>
      <form onSubmit={form.onSubmit(setSubmittedValues)}>
        <TextInput
          label="Name"
          placeholder="Name"
          key={form.key("product_name")}
          {...form.getInputProps("product_name")}
        />
        <TextInput
          mt="sm"
          label="Description"
          placeholder="Description"
          key={form.key("description")}
          {...form.getInputProps("description")}
        />
        <NumberInput
          mt="sm"
          label="Price"
          placeholder="Price"
          min={0}
          max={99}
          key={form.key("price")}
          {...form.getInputProps("price")}
        />
        <Button type="submit" mt="sm">
          Submit
        </Button>

        <Text mt="md">Form values:</Text>
        <Code block>{JSON.stringify(form.values, null, 2)}</Code>

        <Text mt="md">Submitted values:</Text>
        <Code block>
          {submittedValues ? JSON.stringify(submittedValues, null, 2) : "–"}
        </Code>
      </form>
    </>
  );
}
