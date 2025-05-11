import { http_cache } from "./http_cache.mjs";
import { each_async } from "./each_async.mjs";
import { html_parse_a_href_surrounded_hrefs } from "./html_parse_a_href_surrounded_hrefs.mjs";
import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function sandbox_3() {
  let u =
    "https://bible.catholicgallery.org/world-english-bible-with-deuterocanon/";
  let { root } = await http_cache_parse_parsed(u);
  let hrefs = await html_parse_a_href_surrounded_hrefs(
    root,
    "https://bible.catholicgallery.org/english/",
    "-1/",
  );
  await each_async(hrefs, async function (href) {
    await http_cache(href);
  });
  return v;
}
