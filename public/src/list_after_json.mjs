import { equal_json } from "./equal_json.mjs";
import { list_after_by } from "./list_after_by.mjs";
export function list_after_json(settings_choices, settings) {
  return list_after_by(settings_choices, settings, equal_json);
}
