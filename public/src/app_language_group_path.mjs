import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_language_group_path(from, to, group_index) {
  assert_arguments_length(arguments, 3);
  return `${from}/to/${to}/group/${group_index}.json`;
}
