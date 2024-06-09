import { data_identifiers } from "./data_identifiers.mjs";
import { data_update_multiple } from "./data_update_multiple.mjs";
import { file_copy } from "./file_copy.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function function_rename(fn_name_from, fn_name_to) {
  let identifiers = await data_identifiers();
  object_property_get(identifiers, fn_name_from);
  let fn_path_from = function_name_to_path(fn_name_from);
  let fn_path_to = function_name_to_path(fn_name_to);
  await file_copy(fn_path_from, fn_path_to);
  await data_update_multiple(fps);
}
