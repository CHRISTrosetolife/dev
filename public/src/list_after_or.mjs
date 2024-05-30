import { list_offset } from "./list_offset.mjs";
import { add_1 } from "./add_1.mjs";
export function list_after_or(settings_choices, settings) {
  let after = list_offset(settings_choices, settings, add_1);
  return after;
}
