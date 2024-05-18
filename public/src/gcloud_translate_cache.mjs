import { http } from "./http.mjs";
import { function_cache } from "./function_cache.mjs";
export async function gcloud_translate_cache(url) {
  return await function_cache(http, [url]);
}
