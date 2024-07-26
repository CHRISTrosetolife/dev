import { each_index } from "./each_index.mjs";
import { each_pairs } from "./each_pairs.mjs";
import { keyboard_keys_rows } from "./keyboard_keys_rows.mjs";
import { equal } from "./equal.mjs";
import { list_size } from "./list_size.mjs";
export function keyboard_near(a, b) {
  let r = keyboard_keys_rows();
  each_pairs(r, (c, d) => {
    let c_size = list_size(c);
    let d_size = list_size(d);
    let difference = c_size - d_size;
    each_index(list, (item, index) => {});
  });
  return equal(a, b);
}
