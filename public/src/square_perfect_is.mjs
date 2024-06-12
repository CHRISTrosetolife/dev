import { equal } from "./equal.mjs";
import { sqrt } from "./sqrt.mjs";
import { round } from "./round.mjs";
export function square_perfect_is(length) {
  let s = round(sqrt(length));
  let sq = s * s;
  let e = equal(sq, length);
  return e;
}
