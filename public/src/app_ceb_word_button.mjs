import { app_ceb_audio } from "./app_ceb_audio.mjs";
import { html_style_font_color } from "./html_style_font_color.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_ceb_word_button(root, cebuano) {
  let cebuano_p = html_button_width_full_text_click(
    root,
    string_combine("👂", cebuano),
    async () => {
      return await app_ceb_audio(cebuano);
    },
  );
  html_style_font_color(cebuano_p, "darkblue");
  app_ceb_audio(cebuano);
  return cebuano_p;
}
