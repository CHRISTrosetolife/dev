import { app_language_word_style } from "./app_language_word_style.mjs";
import { app_language_audio } from "./app_language_audio.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_language_word_button_audio_none(root, langauge, cebuano) {
  let button = html_button_width_full_text_click(
    root,
    string_combine("👂", cebuano),
    async () => {
      return await app_language_audio(cebuano);
    },
  );
  app_language_word_style(button);
  return button;
}
