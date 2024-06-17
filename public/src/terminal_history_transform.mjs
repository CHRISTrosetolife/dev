import { terminal_data_path } from "./terminal_data_path.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
export async function terminal_history_transform(lambda) {
  return await file_json_transform_exists(terminal_data_path(), lambda, []);
  function lambda(d) {
    let history = object_property_initialize(d, "history", []);
    return lambda(history);
  }
}
