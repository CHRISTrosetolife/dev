import { bible_interlinear_words_audio_upload_generic } from "./bible_interlinear_words_audio_upload_generic.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
import { bible_interlinear_words_greek } from "./bible_interlinear_words_greek.mjs";
export async function bible_interlinear_words_hebrew_audio_upload() {
  let alphabet = keyboard_greek();
  let language_code = "el";
  let words = await bible_interlinear_words_greek();
  await bible_interlinear_words_audio_upload_generic(
    words,
    alphabet,
    language_code,
  );
}
