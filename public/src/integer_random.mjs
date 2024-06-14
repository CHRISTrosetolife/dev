import { random } from "./random.mjs";
import { floor } from "./floor.mjs";
export function integer_random(low, high) {
  return floor(random() * (high - low + 1) + low);
}
