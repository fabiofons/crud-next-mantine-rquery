import ListItems from "@/components/ListItems";
import { Container, Title } from "@mantine/core";
import { Suspense } from "react";

const fallbackMessage = () => (
  <p style={{ textAlign: "center" }}>loading... on initial request</p>
);

const HydrationStreamSuspense = () => {
  return (
    <Container style={{ maxWidth: 1220, margin: "auto" }}>
      <Title>Usersssss</Title>
      <Suspense fallback={fallbackMessage()}>
        <ListItems />
      </Suspense>
    </Container>
  );
};

export default HydrationStreamSuspense;
