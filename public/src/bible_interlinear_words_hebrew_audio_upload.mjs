import { bible_interlinear_cache_old } from "./bible_interlinear_cache_old.mjs";
import { bible_interlinear_words_audio_upload_generic } from "./bible_interlinear_words_audio_upload_generic.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
export async function bible_interlinear_words_hebrew_audio_upload() {
  let alphabet = keyboard_greek();
  let language_code = "el";
  await bible_interlinear_words_audio_upload_generic(
    bible_interlinear_cache_old,
    alphabet,
    language_code,
  );
}
