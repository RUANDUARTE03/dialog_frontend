import React, { useState } from "react";
import Header from "../../components/header";
import BodyFriends from "../../components/bodyFriends/bodyFriends";
import { useQuery } from "@apollo/client";
import { gelAllUsers } from "../../graphql/queries/users";

export default function Home() {
  const [searchInput, setSearchInput] = useState<string>("");

  const { data } = useQuery(gelAllUsers, {
    variables: {
      search: searchInput,
    },
  });

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <BodyFriends users={data?.users} clickUser />
    </>
  );
}
