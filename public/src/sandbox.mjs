import { http_cache } from "./http_cache.mjs";
export async function sandbox() {
  let url = "https://www.ccel.org/ccel/b/bible/ceb_p/cache/ceb_p.txt";
  return await http_cache(url);
}
