export function squared(a: number): number {
  return a * a;
}

export function rollDie(): number {
  return 1 + Math.floor(Math.random() * 6);
}

export function scoreResult(score: number, goal: number): string {
  console.log(`score: ${score}, goal: ${goal}`);
  return "";
}

export function rollDice(n: number): number[] {
  console.log(`roll ${n} dice`);
  return [];
}

export function totalScore(dice: number[]): number {
  console.log(`sum of ${dice}`);
  return 0;
}

export function highest3(dice: number[]): number[] {
  console.log(`highest 3 of ${dice}`);
  return [];
}

export function doTurn(): string {
  console.log("roll 6 dice, pick highest 3, sum them")
  return "";
}

export function playGame(turns: number, goal: number): string {
  console.log(`play ${turns} turns, win if score is above ${goal}`)
  return "";
}
