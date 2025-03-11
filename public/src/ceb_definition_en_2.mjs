import { list_adder } from "./list_adder.mjs";
import { html_parse_text_trim_whitespace } from "./html_parse_text_trim_whitespace.mjs";
import { html_parse_href } from "./html_parse_href.mjs";
import { ceb_definition_prefix_en } from "./ceb_definition_prefix_en.mjs";
import { ceb_definition_prefix_ceb } from "./ceb_definition_prefix_ceb.mjs";
import { each } from "./each.mjs";
import { html_parse_tag_named_a_list_filter } from "./html_parse_tag_named_a_list_filter.mjs";
import { ceb_definition_en } from "./ceb_definition_en.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export async function ceb_definition_en_2(d) {
  let children = await ceb_definition_en(d);
  let as = html_parse_tag_named_a_list_filter(children);
  let prefix_1 = ceb_definition_prefix_ceb();
  let prefix_2 = ceb_definition_prefix_en();
  let en = null;
  list_adder(function (la) {});
  each(as, function (a) {
    let h = html_parse_href(a);
    let t = html_parse_text_trim_whitespace(a);
    if (string_starts_with(h, prefix_2)) {
      en = t;
    } else if (string_starts_with(h, prefix_1)) {
    }
  });
}
