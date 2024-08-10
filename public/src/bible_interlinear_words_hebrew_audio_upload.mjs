import { string_includes_multiple } from "./string_includes_multiple.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_interlinear_words } from "./bible_interlinear_words.mjs";
import { bible_interlinear_cache_old } from "./bible_interlinear_cache_old.mjs";
import { bible_interlinear_words_audio_upload_generic } from "./bible_interlinear_words_audio_upload_generic.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
import { string_includes } from "./string_includes.mjs";
export async function bible_interlinear_words_hebrew_audio_upload() {
  let excluded = "־׀׃";
  let filter = (character) => string_includes_multiple(alphabet, character);
  let words = await bible_interlinear_words(bible_interlinear_cache_old);
  return list_filter(words, (w) => string_includes(w, "׃"));
  let language_code = "he";
  await bible_interlinear_words_audio_upload_generic(
    bible_interlinear_cache_old,
    keyboard_greek,
    language_code,
  );
}
