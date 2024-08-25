import { Elysia } from "elysia";

const app = new Elysia()
  .get("/hello", () => "Hello World")
  .get("/hello/:name", ({ params: { name } }) => `Hello ${name}`)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
