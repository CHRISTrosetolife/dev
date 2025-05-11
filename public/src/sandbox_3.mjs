import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function sandbox_3() {
  let u =
    "https://bible.catholicgallery.org/world-english-bible-with-deuterocanon/";
  await http_cache_parse_parsed(u);
}
