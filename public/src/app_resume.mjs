import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_resume() {
  let root = html_style_default_initialize();
  let full_name = html_p_text(root, "JARED MATHIS");
  html_style_bold(full_name);
}
