import { unawait } from "./unawait.mjs";
import { app_language_word_button_audio_none } from "./app_language_word_button_audio_none.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_language_word_button(root, language, text) {
  assert_arguments_length(arguments, 3);
  let button = app_language_word_button_audio_none(root, language, text);
  unawait(async () => await app_language_audio(language, text));
  return button;
}
