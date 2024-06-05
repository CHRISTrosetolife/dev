import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function list_map(list, mapper) {
  assert_arguments_length(arguments, 2);
  return list.map((element) => mapper(element));
}
