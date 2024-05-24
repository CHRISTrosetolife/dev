import { subtract_1 } from "./subtract_1.mjs";
import { mod } from "./mod.mjs";
import { equal } from "./equal.mjs";
export function mod_last_is(index, level_size) {
  return equal(mod(index, level_size), subtract_1(level_size));
}
