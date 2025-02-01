import { html_progress_style_update } from "./html_progress_style_update.mjs";
import { html_progress_index_set } from "./html_progress_index_set.mjs";
import { html_span } from "./html_span.mjs";
import { html_button_width_full } from "./html_button_width_full.mjs";
import { number_locale } from "./number_locale.mjs";
import { html_style_success } from "./html_style_success.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function html_progress(root, progress_text, index, count) {
  let button = html_button_width_full(root);
  html_span_text(button, string_combine_multiple([progress_text, " "]));
  let text_index = html_span(button);
  let result = {
    button,
    text_index,
    count,
  };
  html_progress_index_set(result, index);
  html_span_text(
    button,
    string_combine_multiple([" of ", number_locale(count)]),
  );
  html_style_success(button);
  html_progress_style_update(result);
  return result;
}
