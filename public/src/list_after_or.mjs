import { list_offset_generic } from "./list_offset_generic.mjs";
import { list_get_or } from "./list_get_or.mjs";
import { list_offset } from "./list_offset.mjs";
import { add_1 } from "./add_1.mjs";
export function list_after_or(settings_choices, settings, default_value) {
  let fn = (list, index) => list_get_or(list, index, default_value);
  return list_offset_generic(list_get_or, list, item, offset);
  let after = list_offset(settings_choices, settings, add_1);
  return after;
}
