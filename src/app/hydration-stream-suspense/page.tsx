import ListItems from "@/app/hydration-stream-suspense/HydrationStreamListItems";
import { Container, Title } from "@mantine/core";
import { Suspense } from "react";

const fallbackMessage = () => (
  <p style={{ textAlign: "center" }}>loading... on initial request</p>
);

const HydrationStreamSuspense = () => {
  return (
    <Container>
      <Title my={40}>Users (Using hydration streaming with Suspense )</Title>
      <Suspense fallback={fallbackMessage()}>
        <ListItems />
      </Suspense>
    </Container>
  );
};

export default HydrationStreamSuspense;
