import { html_parse_a_href_starts_with_hrefs } from "./html_parse_a_href_starts_with_hrefs.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function sandbox_3() {
  let u =
    "https://bible.catholicgallery.org/world-english-bible-with-deuterocanon/";
  let p = await http_cache_parse_parsed(u);
  let v = await html_parse_a_href_starts_with_hrefs(p, "");
  return v;
}
