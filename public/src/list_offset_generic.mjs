import { list_index } from "./list_index.mjs";
export function list_offset_generic(settings_choices, settings, fn, offset) {
  let settings_index = list_index(settings_choices, settings);
  let after = fn(settings_choices, offset(settings_index));
  return after;
}
