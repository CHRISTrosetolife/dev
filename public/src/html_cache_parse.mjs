import { html_parse } from "./html_parse.mjs";
import { http_cache } from "./http_cache.mjs";
export async function html_cache_parse(url) {
  let html = await http_cache(url);
  let root = await html_parse(html);
  return root;
}
