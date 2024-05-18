import { http } from "./http.mjs";
import { function_cache } from "./function_cache.mjs";
import { gcloud_translate } from "./gcloud_translate.mjs";
export async function gcloud_translate_cache(url) {
  return await function_cache(gcloud_translate, [url]);
}
