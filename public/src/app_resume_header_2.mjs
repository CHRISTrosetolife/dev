import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_resume_header_2(root, header) {
  let full_name = html_p_text(root, header);
  html_style_bold(full_name);
  html_style_centered(full_name);
}
