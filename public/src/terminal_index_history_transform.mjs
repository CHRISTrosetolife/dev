import { list_get } from "./list_get.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { number_is } from "./number_is.mjs";
import { terminal_data_transform } from "./terminal_data_transform.mjs";
import { list_size } from "./list_size.mjs";
export async function terminal_index_history_transform(lambda) {
  return await terminal_data_transform(function (d) {
    if (!number_is(d.history_index)) {
      return;
    }
    d.history_index = lambda(d.history_index);
    let i = d.history_index;
    let history = object_property_initialize(d, "history", []);
    if (i >= list_size(history)) {
      return;
    }
    let r = list_get(history, i);
    return r;
  });
}
