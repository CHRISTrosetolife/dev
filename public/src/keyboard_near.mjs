import { each_pairs } from "./each_pairs.mjs";
import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
import { equal } from "./equal.mjs";
export function keyboard_near(a, b) {
  let r = keyboard_keys_rows();
  each_pairs();
  return equal(a, b);
}
