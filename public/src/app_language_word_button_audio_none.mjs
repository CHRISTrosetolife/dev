import { html_flag_ph } from "./html_flag_ph.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_flag } from "./html_flag.mjs";
import { app_language_word_style } from "./app_language_word_style.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
export function app_language_word_button_audio_none(root, langauge, text) {
  assert_arguments_length(arguments, 3);
  let button = html_button_width_full_text_click(root, "", async () => {
    if (false) {
      return await app_language_audio(langauge, text);
    }
  });
  html_span_text(button, " 👂 ");
  html_flag(button, html_flag_ph());
  html_span_text(button, string_combine_multiple([" ", text]));
  app_language_word_style(button);
  return button;
}
