import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
export function app_gs_phrase_combine(list) {
  assert_arguments_length(arguments, 1);
  return list_join_space(list_filter(list, string_empty_not_is));
}
