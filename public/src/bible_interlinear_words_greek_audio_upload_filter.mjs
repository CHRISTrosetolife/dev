import { string_includes } from "./string_includes.mjs";
import { keyboard_greek } from "./keyboard_greek.mjs";
export function bible_interlinear_words_greek_audio_upload_filter() {
  let alphabet = keyboard_greek();
  let filter = (character) => string_includes(alphabet, character);
  return filter;
}
