import helloworld from "./helloworld";
import { Hono } from "hono";
import { handle } from "hono/vercel";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app.route("helloworld", helloworld);

export const GET = handle(app);
export type AppType = typeof routes;
