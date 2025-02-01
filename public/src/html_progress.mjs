import { html_inner_set } from "./html_inner_set.mjs";
import { html_button_width_full } from "./html_button_width_full.mjs";
import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { number_locale } from "./number_locale.mjs";
import { html_style_success_background } from "./html_style_success_background.mjs";
import { html_style } from "./html_style.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { add_1 } from "./add_1.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function html_progress(root, progress_text, index, count) {
  assert_arguments_length(arguments, 4);
  let progress = html_button_width_full(root);
  html_inner_set(
    progress,
    string_combine_multiple([
      progress_text,
      " ",
      number_locale(add_1(index)),
      " of ",
      number_locale(count),
    ]),
  );
  html_style_success(progress);
  let progress_percent = (index / count) * 100;
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
