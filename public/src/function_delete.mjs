import { data_remove } from "./data_remove.mjs";
import { data_transform } from "./data_transform.mjs";
import { file_delete } from "./file_delete.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export async function function_delete(function_name) {
  let function_path = function_name_to_path(function_name);
  await file_delete(function_path);
  await data_transform(async function lambda(data) {
    data_remove(data, function_name);
  });
}
