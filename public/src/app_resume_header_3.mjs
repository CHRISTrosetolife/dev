import { html_style_font_size_default_multiplied } from "./html_style_font_size_default_multiplied.mjs";
import { html_style_underline } from "./html_style_underline.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_resume_header_3(root, header) {
  let p = html_p_text(root, header);
  html_style_bold(p);
  html_style_underline(p);
  html_style_font_size_default_multiplied(p, 1.1);
  return p;
}
