import { list_offset } from "./list_offset.mjs";
import { add_1 } from "./add_1.mjs";
export function list_after(settings_choices, settings) {
  let offset = add_1;
  let after = list_offset(settings_choices, settings, offset);
  return after;
}
