import { string_symbols } from "./string_symbols.mjs";
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
  let language_code = "he";
  let v2 = string_symbols(words);
  return v2;
  await bible_interlinear_words_audio_upload_generic(
    bible_interlinear_cache_old,
    keyboard_greek,
    language_code,
  );
}
