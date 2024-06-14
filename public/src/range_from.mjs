import { range_generic } from "./range_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { add_1 } from "./add_1.mjs";
import { integer_parse } from "./integer_parse.mjs";
export function range_from(from, to) {
  assert_arguments_length(arguments, 2);
  to = integer_parse(to);
  from = integer_parse(from);
  return range_generic(add_1(to - from), from);
}
