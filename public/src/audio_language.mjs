import { list_filter } from "./list_filter.mjs";
import { audio_language_list } from "./audio_language_list.mjs";
export function audio_language(language) {
  let list = audio_language_list();
  list_filter(list);
  return list;
}
