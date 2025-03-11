import { list_map } from "./list_map.mjs";
import { assert_message } from "./assert_message.mjs";
import { list_add } from "./list_add.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_parse_text_trim_whitespace } from "./html_parse_text_trim_whitespace.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { ceb_definition_prefix_en } from "./ceb_definition_prefix_en.mjs";
import { ceb_definition_prefix_ceb } from "./ceb_definition_prefix_ceb.mjs";
import { each } from "./each.mjs";
import { html_parse_tag_named_a_list_filter } from "./html_parse_tag_named_a_list_filter.mjs";
import { ceb_definition_en } from "./ceb_definition_en.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
import { list_any } from "./list_any.mjs";
export async function ceb_definition_en_2(d) {
  let children = await ceb_definition_en(d);
  let mapped = list_map(children, html_parse_text);
  let result = {};
  if (
    list_any(mapped, function (m) {
      let v3 = string_starts_with(m, "No results found for the English word ");
      return v3;
    })
  ) {
    let v4 = result;
    return v4;
  }
  let as = html_parse_tag_named_a_list_filter(children);
  let prefix_1 = ceb_definition_prefix_ceb();
  let prefix_2 = ceb_definition_prefix_en();
  let en = null;
  each(as, function (a) {
    let h = html_parse_href(a);
    let t = html_parse_text_trim_whitespace(a);
    if (string_starts_with(h, prefix_2)) {
      en = t;
    } else if (string_starts_with(h, prefix_1)) {
      assert_message(null_not_is, [en], function () {
        let v2 = {
          d,
        };
        return v2;
      });
      let r = object_property_initialize(result, en, []);
      list_add(r, t);
    }
  });
  let v = result;
  return v;
}
