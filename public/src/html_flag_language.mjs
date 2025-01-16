import { html_flag_language_get } from "./html_flag_language_get.mjs";
import { html_flag } from "./html_flag.mjs";
export function html_flag_language(parent, language) {
  let g = html_flag_language_get(language);
  html_flag(parent, g);
}
