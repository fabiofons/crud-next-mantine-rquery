import getQueryClient from "@/utils/getQueryClient";
import { dehydrate, Hydrate } from "@tanstack/react-query";
import axios from "axios";
import HydratedListItems from "./HydratedListItems";
import { Container, Title } from "@mantine/core";

type User = {
  id: number;
  name: string;
};

export default async function HydratedPosts() {
  const getUsers = async () => {
    const res = await axios.get<User[]>(
      "https://jsonplaceholder.typicode.com/users"
    );
    return res.data;
  };

  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["hydrated-users"], getUsers);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Container>
      <Title my={40}>Users (Hydrate users)</Title>
      <Hydrate state={dehydratedState}>
        <HydratedListItems />
      </Hydrate>
    </Container>
  );
}
