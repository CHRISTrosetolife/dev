import { object_merge_list_generic } from "./object_merge_list_generic.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function object_merge_list_strict(from, to) {
  assert_arguments_length(arguments, 2);
  let strict = true;
  let v = object_merge_list_generic(from, strict, to);
  return v;
}
