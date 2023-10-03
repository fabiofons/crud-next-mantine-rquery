"use client";

import UsersList from "../../components/UsersList";
import { Container, Pill } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

type User = {
  name: string;
  id: number;
};

async function getUsers() {
  return (await fetch("https://jsonplaceholder.typicode.com/users").then(
    (res) => res.json()
  )) as User[];
}

const ListItems = () => {
  const [count, setCount] = useState(0);
  const { data, isLoading, isError } = useQuery<User[]>({
    queryKey: ["stream-hydrate-users"],
    queryFn: () => getUsers(),
    suspense: true,
    staleTime: 5 * 1000,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Container>
      <Pill m={20}>{count}</Pill>
      {isLoading ? (
        <p>Loading</p>
      ) : isError ? (
        <p>Something went wrong!!</p>
      ) : (
        <UsersList data={data} />
      )}
    </Container>
  );
};

export default ListItems;
