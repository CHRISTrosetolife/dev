import { ceb_html_cache_parse_form1 } from "./ceb_html_cache_parse_form1.mjs";
import { ceb_definition_url } from "./ceb_definition_url.mjs";
export async function ceb_definition_2(word) {
  let url = ceb_definition_url(word);
  let { parsed, children } = await ceb_html_cache_parse_form1(url);
}
