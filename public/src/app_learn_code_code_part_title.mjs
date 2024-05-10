import { html_spacer_vertical } from "./html_spacer_vertical.mjs";
import { html_style_margin_none } from "./html_style_margin_none.mjs";
import { html_style } from "./html_style.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_learn_code_code_part_title(parent, title_text) {
  let title = html_p_text(parent, title_text);
  html_style(title, {
    "font-size": "2.3vh",
  });
  html_style_margin_none(title);
  html_spacer_vertical(parent);
}
