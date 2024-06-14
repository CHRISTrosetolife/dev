import { floor } from "./floor.mjs";
export function integer_random(low, high) {
  return floor(Math.random() * (high - low + 1) + low);
}
