import { sandbox_texts } from "./sandbox_texts.mjs";
import { function_cache } from "./function_cache.mjs";
import { gcloud_translate } from "./gcloud_translate.mjs";
export async function gcloud_translate_cache(url) {
  return await gcloud_translate("en", "es", sandbox_texts.name, ["john"]);
  return await function_cache(gcloud_translate, [url]);
}
