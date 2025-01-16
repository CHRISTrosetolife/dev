import { html_flag_languages } from "./html_flag_languages.mjs";
import { html_flag } from "./html_flag.mjs";
export function html_flag_language(parent, language) {
  let g = html_flag_languages(language);
  html_flag(parent, g);
}
