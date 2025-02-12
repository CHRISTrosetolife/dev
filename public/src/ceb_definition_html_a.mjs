import { ceb_definition_url } from "./ceb_definition_url.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { html_a_blank } from "./html_a_blank.mjs";
export function ceb_definition_html_a(row, definition_entry, word_defined) {
  return html_a_blank(
    row,
    list_join_comma_space(object_property_get(definition_entry, word_defined)),
    ceb_definition_url(word_defined),
  );
}
