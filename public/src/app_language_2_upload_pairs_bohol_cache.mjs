import { app_language_2_upload_pairs_bohol } from "./app_language_2_upload_pairs_bohol.mjs";
import { function_cache } from "./function_cache.mjs";
export async function app_language_2_upload_pairs_bohol_cache(
  language_from,
  language_to,
  limit,
) {
  let v = await function_cache(app_language_2_upload_pairs_bohol, [
    language_from,
    language_to,
    limit,
  ]);
  return v;
}
