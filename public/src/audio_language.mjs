import { generate_list_prefix_plugin } from "./generate_list_prefix_plugin.mjs";
import { audio_language_list } from "./audio_language_list.mjs";
export function audio_language(language) {
  let fn = audio_language_list;
  return generate_list_prefix_plugin(fn, language);
}
