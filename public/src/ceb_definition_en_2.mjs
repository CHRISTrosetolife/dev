import { each } from "./each.mjs";
import { html_parse_tag_named_a_list_filter } from "./html_parse_tag_named_a_list_filter.mjs";
import { ceb_definition_en } from "./ceb_definition_en.mjs";
export async function ceb_definition_en_2(d) {
  let children = await ceb_definition_en(d);
  let as = html_parse_tag_named_a_list_filter(children);
  each(as, function (a) {});
}
