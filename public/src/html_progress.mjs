import { html_button_width_full } from "./html_button_width_full.mjs";
import { number_locale } from "./number_locale.mjs";
import { html_style_success_background } from "./html_style_success_background.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { add_1 } from "./add_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_progress(root, progress_text, index, count) {
  let button = html_button_width_full(root);
  html_span_text(button, string_combine_multiple([progress_text, " "]));
  let text_index = html_span_text(button, number_locale(add_1(index)));
  html_span_text(
    button,
    string_combine_multiple([" of ", number_locale(count)]),
  );
  html_style_success(button);
  let progress_percent = (index / count) * 100;
  html_style(button, {
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
  return {
    button,
    text_index,
    count,
  };
}
