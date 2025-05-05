import { prayers } from "./prayers.mjs";
import { html_prayer } from "./html_prayer.mjs";
import { html_style_default_initialize } from "./html_style_default_initialize.mjs";
export function app_pray() {
  let body = html_style_default_initialize();
  let ps = prayers();
  html_prayer(body, ps);
}
