import { list_size } from "./list_size.mjs";
import { list_pop } from "./list_pop.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { terminal_data_transform } from "./terminal_data_transform.mjs";
export async function terminal_data_history_clear() {
  await terminal_data_transform(function lambda(d) {
    let history = object_property_initialize(d, "history", []);
    let r = list_pop(history);
    d.history_index = list_size(history);
    return r;
  });
}
