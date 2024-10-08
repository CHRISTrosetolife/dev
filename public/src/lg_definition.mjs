import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function lg_definition() {
  let u = string_combine_multiple([url_secure(), "learnluganda.com/concise"]);
  await http_cache_parse_parsed(u);
}
