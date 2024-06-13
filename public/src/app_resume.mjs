import { html_email } from "./html_email.mjs";
import { html_phone } from "./html_phone.mjs";
import { html_style_centered } from "./html_style_centered.mjs";
import { html_style_bold } from "./html_style_bold.mjs";
import { html_p_text } from "./html_p_text.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
import { html_span_text } from "./html_span_text.mjs";
export function app_resume() {
  let root = html_style_default_initialize();
  let full_name = html_p_text(root, "JARED MATHIS");
  html_style_bold(full_name);
  html_style_centered(full_name);
  html_span_text(root, "1612 Orlando Circle South");
  let phone = html_phone(root, "+1 (904) 314-4052");
  html_email(root, "JESUSrosetolife@protonmail.com");
}
