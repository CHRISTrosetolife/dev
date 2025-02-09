import { app_language_audio_unawait } from "./app_language_audio_unawait.mjs";
import { app_language_word_button_audio_none } from "./app_language_word_button_audio_none.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_language_word_button(root, language, text) {
  assert_arguments_length(arguments, 3);
  let button = app_language_word_button_audio_none(root, language, text);
  if (false) {
    app_language_audio_unawait(language, text);
  }
  return button;
}
