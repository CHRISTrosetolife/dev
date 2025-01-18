import { html_style_success_background } from "./html_style_success_background.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { add_1 } from "./add_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text } from "./html_button_width_full_text.mjs";
export function html_progress(
  root,
  progress_text,
  settings_index,
  settings_choices_size,
) {
  let progress = html_button_width_full_text(
    root,
    string_combine_multiple([
      progress_text,
      " ",
      add_1(settings_index),
      " of ",
      settings_choices_size,
    ]),
  );
  html_style_success(progress);
  let progress_percent = (settings_index / settings_choices_size) * 100;
  html_style(progress, {
    background: string_combine_multiple([
      "linear-gradient(90deg, ",
      html_style_success_background(),
      " ",
      progress_percent,
      "%, white ",
      progress_percent,
      "%)",
    ]),
  });
}
