import { html_cache_parse_hrefs } from "./html_cache_parse_hrefs.mjs";
export async function sandbox_3() {
  let u =
    "https://bible.catholicgallery.org/world-english-bible-with-deuterocanon/";
  let v = await html_cache_parse_hrefs(u);
  return v;
}
