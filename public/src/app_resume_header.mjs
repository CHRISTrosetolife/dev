import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_style_default_font_size_value } from "./html_style_default_font_size_value.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_resume_header(root, header) {
  let h = html_p_text(root, header);
  let multiplier = 1.5;
  html_style_font_size_default_multiplied(h, multiplier);
  html_style_bold(h);
  html_style_centered(h);
  html_style_default_font_size_value();
}
