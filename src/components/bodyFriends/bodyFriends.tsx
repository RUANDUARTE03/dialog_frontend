import React from "react";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";
import ImageUserComponent from "../imageUser/imageUser";
import { ContainerBodyFriends, Friend, BodyInformations } from "./styles";
import Information from "../../components/information";

type BodyFriendProps = {
  users: User[];
  clickUser: boolean;
};

export default function BodyFriends({ users, clickUser }: BodyFriendProps) {
  const navigate = useNavigate();

  const clickHandleUser = (userId: string) => {
    navigate(`/user/${userId}`);
  };

  return (
    <ContainerBodyFriends>
      {users?.map((user: User) => {
        return (
          <Friend
            onClick={() => {
              clickUser && clickHandleUser(user._id);
            }}
            style={clickUser ? { cursor: "pointer" } : {}}
          >
            <ImageUserComponent picture={user.picture} />
            <BodyInformations>
              <Information title="Name:" info={user.name} />
              <Information title="Age:" info={user.age.toString()} />
              <Information title="EyeColor:" info={user.eyeColor} />
              <Information title="Company:" info={user.company} />
              <Information title="Email:" info={user.email} />
            </BodyInformations>
          </Friend>
        );
      })}
    </ContainerBodyFriends>
  );
}
