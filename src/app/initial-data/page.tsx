import React from "react";
import axios from "axios";
import { Container, Title } from "@mantine/core";
import UsersList from "@/components/UsersList";
import InitialDataListItems from "@/app/initial-data/InitialDataListItems";

type User = {
  id: number;
  name: string;
};

const getUsers = async () => {
  const res = await axios.get<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );
  return res.data;
};

const queryInitialData = async () => {
  const users = await getUsers();
  return (
    <Container>
      <Title>Users using (initial data)</Title>
      <InitialDataListItems data={users} />
    </Container>
  );
};

export default queryInitialData;
