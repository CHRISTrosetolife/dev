import { object_property_set } from "./object_property_set.mjs";
import { html_parse_text_lower } from "./html_parse_text_lower.mjs";
import { html_parse_tag_named } from "./html_parse_tag_named.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { each } from "./each.mjs";
import { html_parse_visit_class_single } from "./html_parse_visit_class_single.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function lg_definition() {
  let u = string_combine_multiple([url_secure(), "learnluganda.com/concise"]);
  let { parsed, root } = await http_cache_parse_parsed(u);
  let d = html_parse_visit_class_single(root, "container");
  let first = "abandon";
  let first_found = false;
  d = {};
  each(object_property_get(d, "children"), (c) => {
    let t = html_parse_text_lower(c);
    if (string_starts_with(t, first)) {
      first_found = true;
    }
    if (!first_found || !html_parse_tag_named(c, "b")) {
      return;
    }
    let { next } = c;
    let n = html_parse_text_lower(next);
    object_property_set(object, "property_name", value);
  });
}
