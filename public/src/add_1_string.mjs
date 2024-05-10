import { string_to } from "./string_to.mjs";
import { add_1 } from "./add_1.mjs";
export function add_1_string(index) {
  let index_1 = add_1(index);
  let index_1_s = string_to(index_1);
  return index_1_s;
}
