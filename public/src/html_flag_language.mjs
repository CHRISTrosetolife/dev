import { object_property_get } from "./object_property_get.mjs";
import { html_flag_us } from "./html_flag_us.mjs";
import { html_flag_ph } from "./html_flag_ph.mjs";
import { html_flag } from "./html_flag.mjs";
export function html_flag_language(parent, language) {
  let languages_to_flags = {
    ceb: html_flag_ph(),
    en: html_flag_us(),
  };
  html_flag(parent, object_property_get(languages_to_flags, language));
}
