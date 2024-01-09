import { squared } from "code";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.get("/", (c) => {
  return c.text(`2 squared is ${squared(2)}`);
});
app.get("/:nb", (c) => {
  const nb = parseInt(c.req.param("nb"));
  return c.text(`${nb} squared is ${squared(nb)}`);
});
app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));

export default {
  port: 3000,
  fetch: app.fetch,
};
