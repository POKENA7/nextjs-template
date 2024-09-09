import { Hono } from "hono";
import { handle } from "hono/vercel";
import helloworld from "./helloworld";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app.route("helloworld", helloworld);

export const GET = handle(app);
export type AppType = typeof routes;
