"use client";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import UsersList from "../../components/UsersList";
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

const InitialDataListItems = ({ data: users }: { data: User[] }) => {
  const { data } = useQuery({
    queryKey: ["initial-data"],
    queryFn: () => getUsers(),
    initialData: users,
  });
  return <UsersList data={data} />;
};

export default InitialDataListItems;
