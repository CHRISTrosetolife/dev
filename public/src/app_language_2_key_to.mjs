import { object_properties_select } from "./object_properties_select.mjs";
import { json_to } from "./json_to.mjs";
export function app_language_2_key_to(c) {
  let properties = ["question", "answer", "language"];
  let c_key = json_to(object_properties_select(c, properties));
  return c_key;
}
