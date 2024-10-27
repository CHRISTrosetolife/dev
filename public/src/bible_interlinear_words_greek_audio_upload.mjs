import { language_code_greek } from "./language_code_greek.mjs";
import { string_includes } from "./string_includes.mjs";
import { bible_interlinear_cache_new } from "./bible_interlinear_cache_new.mjs";
import { bible_interlinear_words_audio_upload_generic } from "./bible_interlinear_words_audio_upload_generic.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
export async function bible_interlinear_words_greek_audio_upload() {
  let alphabet = keyboard_greek();
  let filter = (character) => string_includes(alphabet, character);
  let language_code = language_code_greek();
  await bible_interlinear_words_audio_upload_generic(
    bible_interlinear_cache_new,
    filter,
    language_code,
  );
}
