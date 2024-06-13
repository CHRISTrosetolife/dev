import { html_style_link } from "./html_style_link.mjs";
import { html_replace_nbsp } from "./html_replace_nbsp.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_resume() {
  let root = html_style_default_initialize();
  let full_name = html_p_text(root, "JARED MATHIS");
  html_style_bold(full_name);
  html_style_centered(full_name);
  let phone_number_text = "+1 (904) 314-4052";
  let phone = html_span_text(root, html_replace_nbsp(phone_number_text));
  html_style_link("tel:" + phone_number_text)(phone);
}
