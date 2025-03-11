import { ceb_html_cache_parse_form1 } from "./ceb_html_cache_parse_form1.mjs";
import { string_to_url } from "./string_to_url.mjs";
import { ceb_definition_prefix_en } from "./ceb_definition_prefix_en.mjs";
import { string_combine } from "./string_combine.mjs";
export async function ceb_definition_en(d) {
  let url = string_combine(ceb_definition_prefix_en(), d);
  url = string_to_url(url);
  let { children: children2_ } = await ceb_html_cache_parse_form1(url);
  let children2 = children2_;
  return children2;
}
