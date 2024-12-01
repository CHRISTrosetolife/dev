import { audio_language_list } from "./audio_language_list.mjs";
import { generate_list_prefix_prefix } from "./generate_list_prefix_prefix.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function audio_language(language) {
  let list = audio_language_list();
  let target = string_combine_multiple([
    generate_list_prefix_prefix(prefix),
    language,
  ]);
  return list;
}
