import { object_property_get } from "./object_property_get.mjs";
export function app_language_2_word_index(v) {
  return object_property_get(object_property_get(v, "word"), "index");
}
