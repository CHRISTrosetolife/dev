import { each } from "./each.mjs";
import { html_parse_a_href_surrounded_hrefs } from "./html_parse_a_href_surrounded_hrefs.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function sandbox_3() {
  let u =
    "https://bible.catholicgallery.org/world-english-bible-with-deuterocanon/";
  let { root } = await http_cache_parse_parsed(u);
  let v = await html_parse_a_href_surrounded_hrefs(
    root,
    "https://bible.catholicgallery.org/english/",
    "-1/",
  );
  $2a;
  each(list, function (item) {});
  return v;
}
