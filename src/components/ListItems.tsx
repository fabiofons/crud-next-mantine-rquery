"use client";

import { Image } from "@mantine/core";
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
      <p>{count}</p>
      {
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data?.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <Image
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                style={{ height: 180, width: 180 }}
                alt={user.name}
              />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default ListItems;
