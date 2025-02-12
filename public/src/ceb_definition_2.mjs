import { html_parse_map_text_trim } from "./html_parse_map_text_trim.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { ceb_definition_prefix_1 } from "./ceb_definition_prefix_1.mjs";
import { ceb_definition_no_results } from "./ceb_definition_no_results.mjs";
import { ceb_html_cache_parse_form1 } from "./ceb_html_cache_parse_form1.mjs";
import { ceb_definition_url } from "./ceb_definition_url.mjs";
export async function ceb_definition_2(word) {
  let url = ceb_definition_url(word);
  let { parsed, children, form1 } = await ceb_html_cache_parse_form1(url);
  if (ceb_definition_no_results(children)) {
    return {
      word,
      definitions: [],
    };
  }
  let prefix_1 = ceb_definition_prefix_1();
  let a_href_lefts = html_parse_a_href_starts_with(form1, prefix_1);
  let mapped3 = html_parse_map_text_trim(a_href_lefts);
  return mapped3;
}
