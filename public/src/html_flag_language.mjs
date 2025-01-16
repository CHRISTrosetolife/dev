import { html_flag_us } from "./html_flag_us.mjs";
import { html_flag_ph } from "./html_flag_ph.mjs";
import { html_flag } from "./html_flag.mjs";
export function html_flag_language(language) {
  html_flag(button, language === "ceb" ? html_flag_ph() : html_flag_us());
}
