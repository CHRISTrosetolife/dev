import { list_sort_string } from "./list_sort_string.mjs";
import { bible_interlinear_words_audio_upload_map } from "./bible_interlinear_words_audio_upload_map.mjs";
import { each } from "./each.mjs";
import { list_adder_unique } from "./list_adder_unique.mjs";
import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { bible_interlinear_words } from "./bible_interlinear_words.mjs";
import { bible_interlinear_cache_old } from "./bible_interlinear_cache_old.mjs";
import { bible_interlinear_words_audio_upload_generic } from "./bible_interlinear_words_audio_upload_generic.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_interlinear_words_hebrew_audio_upload() {
  let excluded = "־׀׃";
  let filter = function (character) {
    let v = !string_includes(excluded, character);
    return v;
  };
  let words = await bible_interlinear_words(bible_interlinear_cache_old);
  let m2 = bible_interlinear_words_audio_upload_map(words, filter);
  let letters = list_adder_unique(function (la) {
    each(m2, function (word) {
      let letters = word.match(/([\u05D0-\u05EA][\u0591-\u05C7]*)/g);
      each(letters, la);
    });
  });
  list_sort_string(letters);
  let language_code = "he";
  let v2 = string_symbols_multiple(words);
  return letters;
  await bible_interlinear_words_audio_upload_generic(
    bible_interlinear_cache_old,
    keyboard_greek,
    language_code,
  );
}
