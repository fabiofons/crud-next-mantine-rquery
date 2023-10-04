"use client";
import UsersList from "@/components/UsersList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

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

const HydratedListItems = () => {
  const { data } = useQuery({
    queryKey: ["hydrated-users"],
    queryFn: () => getUsers(),
  });
  return data ? <UsersList data={data} /> : null;
};

export default HydratedListItems;
