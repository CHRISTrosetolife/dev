import { http_iso_8859_1 } from "./http_iso_8859_1.mjs";
import { function_cache } from "./function_cache.mjs";
export async function http_iso_8859_1_cache(url) {
  return await function_cache(http_iso_8859_1, [url]);
}
