import React from "react";
import Home from "../features/home";
import User from "../features/user/user";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import Client from "../graphql/apolloClient";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <ApolloProvider client={Client}>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/user/:id"} element={<User />} />
            <Route path={"*"} element={<h1>Not Found</h1>} />
          </Routes>
        </ApolloProvider>
      </BrowserRouter>
    </>
  );
}
