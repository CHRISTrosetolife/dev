import { terminal_data_transform } from "./terminal_data_transform.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
export async function terminal_history_transform(lambda) {
  return await terminal_data_transform(function (d) {
    let history = object_property_initialize(d, "history", []);
    return lambda(history);
  });
}
