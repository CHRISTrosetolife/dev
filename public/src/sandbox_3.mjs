import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function sandbox_3() {
  let url = "https://mechon-mamre.org/p/pt/pt00.htm";
  let parsed = await http_cache_parse_parsed(url);
  return parsed;
}
