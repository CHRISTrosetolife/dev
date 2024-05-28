import { list_offset } from "./list_offset.mjs";
import { subtract_1 } from "./subtract_1.mjs";
export function list_before(settings_choices, settings) {
  let after = list_offset(settings_choices, settings, subtract_1);
  return after;
}
