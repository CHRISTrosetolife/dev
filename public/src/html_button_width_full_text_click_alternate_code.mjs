import { app_learn_code_style_code_colored } from "./app_learn_code_style_code_colored.mjs";
import { noop } from "./noop.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_alternate } from "./html_style_alternate.mjs";
import { html_style_alternate_split } from "./html_style_alternate_split.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
export function html_button_width_full_text_click_alternate_code(
  root,
  description,
  on_click,
) {
  let b = html_button_width_full_text_click(root, "", on_click);
  let split = html_style_alternate_split(description);
  html_style_alternate(
    b,
    html_span,
    [noop, app_learn_code_style_code_colored],
    split,
  );
  return b;
}
