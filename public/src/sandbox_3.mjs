import { html_cache_parse_hrefs } from "./html_cache_parse_hrefs.mjs";
import { tautology } from "./tautology.mjs";
export async function sandbox_3() {
  let u =
    "https://bible.catholicgallery.org/world-english-bible-with-deuterocanon/";
  let v = await html_cache_parse_hrefs(u, tautology);
  return v;
}
