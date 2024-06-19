import { app_language_word_button_audio_none } from "./app_language_word_button_audio_none.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
export function app_language_word_button(root, cebuano) {
  let button = app_language_word_button_audio_none(root, cebuano);
  (async () => await app_language_audio(cebuano))();
  return button;
}
