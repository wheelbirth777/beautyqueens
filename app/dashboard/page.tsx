import { Container, Space, Title } from "@mantine/core";
import React from "react";
import DashboardForm from "../component/Form/DashboardForm";

const page = () => {
  return (
    <>
      <Container pb={"xl"}>
        <Space h="xl" />
        <Title>Dashboard2</Title>
        <DashboardForm />
        <Space h="xl" />
      </Container>
    </>
  );
};

export default page;
