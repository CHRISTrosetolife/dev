import { list_offset_generic } from "./list_offset_generic.mjs";
import { list_get } from "./list_get.mjs";
export function list_offset(settings_choices, settings, offset) {
  let fn = (list, index, default_value) => list_get(list, index);
  return list_offset_generic(settings_choices, settings, fn, offset);
}
