import { squared, rollDie, totalScore, rollDice, playGame } from "code";
import { Hono } from "hono";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.get("/", (c) => {
  return c.text(`2 squared is ${squared(2)}`);
});

app.get("/squared/:nb", (c) => {
  const nb = parseInt(c.req.param("nb"));
  return c.text(`${nb} squared is ${squared(nb)}`);
});

app.get("/dice", (c) => {
  return c.text(`I rolled a ${rollDie()}`);
});

app.get("/dice/:nb", (c) => {
  const nb = parseInt(c.req.param("nb"));
  const results = rollDice(nb);
  return c.text(`I rolled ${nb} dice. Total is ${totalScore(results)}`);
});

app.get("game/goal/:goal/turns/:turns", (c) => {
  const turns = parseInt(c.req.param("turns"));
  const goal = parseInt(c.req.param("goal"));
  const result = playGame(turns, goal);
  return c.text(
    `I did ${turns} turns to try to reach ${goal}. Result is ${result}.`,
  );
});

type TurnResult = {
  turns: number;
  total: number;
  win: boolean;
};

function playUntil(goal: number, abandonAtTurn: number): TurnResult {
  console.log(`play until ${goal} or ${abandonAtTurn} turns`);
  return { turns: 0, total: 0, win: false };
}

app.get("game/goal/:goal", (c) => {
  const goal = parseInt(c.req.param("goal"));
  const { turns, total, win } = playUntil(goal, 10);
  const result = win ? "won" : "lost";
  return c.text(
    `I did ${turns} turns to try to reach ${goal}, and I ${result} with a total of ${total}.`,
  );
});

app.use("/favicon.ico", serveStatic({ path: "./favicon.ico" }));

export default {
  port: 3000,
  fetch: app.fetch,
};
