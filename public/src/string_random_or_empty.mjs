import { random_50_50 } from "./random_50_50.mjs";
export function string_random_or_empty(s) {
  return random_50_50() ? "" : s;
}
