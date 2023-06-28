import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { PingResolver } from "./resolvers/ping";
import { FighterResolver } from "./resolvers/FighterResolver";

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, FighterResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}