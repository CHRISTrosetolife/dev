import { function_name_combine } from "./function_name_combine.mjs";
import { fn_name } from "./fn_name.mjs";
import { list_filter } from "./list_filter.mjs";
import { audio_language_list } from "./audio_language_list.mjs";
export function audio_language(language) {
  let list = audio_language_list();
  let prefix = function_name_combine(fn_name("audio_language"), language);
  list_filter(list);
  return list;
}
