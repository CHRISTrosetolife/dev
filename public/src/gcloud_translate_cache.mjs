import { function_cache } from "./function_cache.mjs";
import { gcloud_translate } from "./gcloud_translate.mjs";
export async function gcloud_translate_cache(
  sourceLanguageCode,
  targetLanguageCode,
  function_name,
  args,
) {
  return await function_cache(gcloud_translate, [
    sourceLanguageCode,
    targetLanguageCode,
    function_name,
    args,
  ]);
}
