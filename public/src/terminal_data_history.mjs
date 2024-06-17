import { log } from "./log.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { terminal_data_transform } from "./terminal_data_transform.mjs";
export async function terminal_data_history() {
  log("here");
  return await terminal_data_transform(function lambda(d) {
    let history = object_property_initialize(d, "history", []);
    log({
      history,
    });
    return history;
  });
}
