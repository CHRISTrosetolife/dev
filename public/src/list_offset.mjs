import { list_get } from "./list_get.mjs";
import { list_index } from "./list_index.mjs";
export function list_offset(settings_choices, settings, offset) {
  let settings_index = list_index(settings_choices, settings);
  let after = list_get(settings_choices, offset(settings_index));
  return after;
}
