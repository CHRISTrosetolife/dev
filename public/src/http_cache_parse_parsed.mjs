import { html_parse_parsed } from "./html_parse_parsed.mjs";
import { http_cache } from "./http_cache.mjs";
export async function http_cache_parse_parsed(url) {
  let html = await http_cache(url);
  let p = await html_parse_parsed(html);
  return p;
}
