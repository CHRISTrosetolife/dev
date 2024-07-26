import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
import { equal } from "./equal.mjs";
export function keyboard_near(a, b) {
  keyboard_keys_rows();
  return equal(a, b);
}
