import { data_importing } from "./data_importing.mjs";
import { functions_data_get } from "./functions_data_get.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export async function functions_imported_by(name) {
  assert_arguments_length(arguments, 1);
  let v = await functions_data_get(data_importing, name);
  return v;
}
