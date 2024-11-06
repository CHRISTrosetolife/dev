import { round } from "./round.mjs";
export function round_2(hours) {
  return round((hours + Number.EPSILON) * 100) / 100;
}
