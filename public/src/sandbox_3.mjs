import { http_cache_parse_parsed } from "./http_cache_parse_parsed.mjs";
export async function sandbox_3() {
  let url = "https://mechon-mamre.org/p/pt/pt00.htm";
  let p = await http_cache_parse_parsed(url);
  let root = p;
}
