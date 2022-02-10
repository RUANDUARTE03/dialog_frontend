import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../../graphql/queries/users";
import BodyFriends from "../../components/bodyFriends/bodyFriends";
import { useQuery } from "@apollo/client";
import { Title, BodyUser, BodyInformations } from "./styles";
import Header from "../../components/header";
import ImageUserComponent from "../../components/imageUser/imageUser";
import Information from "../../components/information/information";

export default function User() {
  const { id } = useParams();
  const [searchInput, setSearchInput] = useState<string>("");

  const { data } = useQuery(getUserById, { variables: { userId: id } });

  return (
    <>
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <BodyUser>
        <ImageUserComponent picture={data?.user?.picture} />
        {data?.user && (
          <BodyInformations>
            <Information title="Name:" info={data?.user?.name} />
            <Information title="Age:" info={data?.user?.age.toString()} />
            <Information title="Email:" info={data?.user?.email} />
          </BodyInformations>
        )}
      </BodyUser>
      <Title>Friends:</Title>
      <BodyFriends users={data?.user?.friends} clickUser={false} />
    </>
  );
}
