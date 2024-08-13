import { object_property_get } from "./object_property_get.mjs";
import { list_concat } from "./list_concat.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
export function ceb_bible_words_definitions_map_choices(d, map) {
  let { word } = d;
  let choices = [word];
  if (object_property_exists(map, word)) {
    choices = list_concat(choices, object_property_get(map, word));
  }
  return choices;
}
