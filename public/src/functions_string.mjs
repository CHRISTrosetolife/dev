import { functions_data_get } from "./functions_data_get.mjs";
import { data_literal_strings } from "./data_literal_strings.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function functions_string(name) {
  assert_arguments_length(arguments, 1);
  let v = functions_data_get(data_literal_strings, name);
  return v;
}
