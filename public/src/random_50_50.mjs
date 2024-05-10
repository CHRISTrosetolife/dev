import { integer_random } from "./integer_random.mjs";
export function random_50_50() {
  return integer_random(1, 2) === 1;
}
