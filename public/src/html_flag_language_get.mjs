import { object_property_get } from "./object_property_get.mjs";
import { html_flag_us } from "./html_flag_us.mjs";
import { html_flag_ph } from "./html_flag_ph.mjs";
export function html_flag_language_get(language) {
  "https://flagicons.lipis.dev/";
  let languages_to_flags = {
    ceb: html_flag_ph(),
    tgl: html_flag_ph(),
    en: html_flag_us(),
    el: "gr",
    he: "il",
    ur: "pk",
  };
  let g = object_property_get(languages_to_flags, language);
  return g;
}
