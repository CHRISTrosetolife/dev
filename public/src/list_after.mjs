import { add_1 } from "./add_1.mjs";
import { list_get } from "./list_get.mjs";
import { list_index } from "./list_index.mjs";
export function list_after(settings_choices, settings) {
  let settings_index = list_index(settings_choices, settings);
  let after = list_get(settings_choices, add_1(settings_index));
  return after;
}
