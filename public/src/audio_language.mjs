import { list_find } from "./list_find.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_name_combine } from "./function_name_combine.mjs";
import { fn_name } from "./fn_name.mjs";
import { audio_language_list } from "./audio_language_list.mjs";
export function audio_language(language) {
  let list = audio_language_list();
  let target = function_name_combine(fn_name("audio_language"), language);
  let match = list_find(list, (e) => object_property_get(e, "name") === target);
  return list;
}
