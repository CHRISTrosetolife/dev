import { terminal_data_path } from "./terminal_data_path.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { file_json_transform_exists } from "./file_json_transform_exists.mjs";
export async function terminal_data_transform(lambda) {
  await file_json_transform_exists(
    (d) => {
      let history = object_property_initialize(d, "history", []);
      lambda(history);
    },
    terminal_data_path(),
    [],
  );
}
