"use client";

import { Flex, Image, SimpleGrid, Title, Pill } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import classes from "./ListItem.module.css";

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
  const { data } = useQuery<User[]>({
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
    <>
      <Pill mb={20}>{count}</Pill>
      {
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }}>
          {data?.map((user) => (
            <Flex
              direction="column"
              align="center"
              key={user.id}
              className={classes.card}
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                style={{ height: 180, width: 180 }}
                alt={user.name}
              />
              <Title order={3} m={10}>
                {user.name}
              </Title>
            </Flex>
          ))}
        </SimpleGrid>
      }
    </>
  );
};

export default ListItems;
