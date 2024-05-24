import { app_ceb_word_style } from "./app_ceb_word_style.mjs";
import { app_ceb_audio } from "./app_ceb_audio.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_ceb_word_button(root, cebuano) {
  let button = html_button_width_full_text_click(
    root,
    string_combine("👂", cebuano),
    async () => {
      return await app_ceb_audio(cebuano);
    },
  );
  app_ceb_word_style(button);
  app_ceb_audio(cebuano);
  return button;
}
