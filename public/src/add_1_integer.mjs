import { add_1 } from "./add_1.mjs";
import { integer_parse } from "./integer_parse.mjs";
export function add_1_integer(index_to) {
  index_to = integer_parse(index_to);
  index_to = add_1(index_to);
  return index_to;
}
