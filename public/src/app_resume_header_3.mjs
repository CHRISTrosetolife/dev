import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
export function app_resume_header_3(root, header) {
  let full_name = html_p_text(root, header);
  html_style_bold(full_name);
}
