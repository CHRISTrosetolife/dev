import { html_style_font_color } from "./html_style_font_color.mjs";
import { storage_url } from "./storage_url.mjs";
import { html_audio } from "./html_audio.mjs";
import { ceb_audio_path } from "./ceb_audio_path.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function app_ceb_word_button(root, cebuano) {
  let cebuano_p = html_button_width_full_text_click(
    root,
    string_combine("👂", cebuano),
    async () => {
      let file_path = ceb_audio_path(0, cebuano);
      return await html_audio(storage_url(file_path));
    },
  );
  html_style_font_color(cebuano_p, "darkblue");
  return cebuano_p;
}
