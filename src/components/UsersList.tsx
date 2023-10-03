"use client";

import { Flex, Image, SimpleGrid, Title } from "@mantine/core";
import classes from "./ListItem.module.css";

type User = {
  id: number;
  name: string;
};

const UsersList = ({ data }: { data: User[] }) => {
  return (
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
  );
};

export default UsersList;
