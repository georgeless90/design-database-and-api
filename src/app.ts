import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";

import { FighterResolver } from "./resolvers/FighterResolver";
import { EventResolver } from "./resolvers/EventResolver";
import { FightResolver } from "./resolvers/FightResolver";

export async function startServer() {

  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [FighterResolver, EventResolver, FightResolver],
      validate: false
    }),
    context: ({ req, res }) => ({ req, res })
  });

  await server.start();

  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}