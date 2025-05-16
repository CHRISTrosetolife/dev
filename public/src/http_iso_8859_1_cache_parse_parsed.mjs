import { html_parse_parsed } from "./html_parse_parsed.mjs";
import { http_iso_8859_1_cache } from "./http_iso_8859_1_cache.mjs";
export async function http_iso_8859_1_cache_parse_parsed(url) {
  let html = await http_iso_8859_1_cache(url);
  let p = await html_parse_parsed(html);
  return p;
}
