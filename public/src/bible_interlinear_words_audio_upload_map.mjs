import { string_filter } from "./string_filter.mjs";
import { string_case_lower } from "./string_case_lower.mjs";
import { list_map } from "./list_map.mjs";
export function bible_interlinear_words_audio_upload_map(words, filter) {
  let m1 = list_map(words, string_case_lower);
  let m2 = list_map(m1, (word) => string_filter(word, filter));
  return m2;
}
