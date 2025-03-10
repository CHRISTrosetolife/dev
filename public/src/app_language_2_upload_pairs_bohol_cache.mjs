import { function_cache_force } from "./function_cache_force.mjs";
import { app_language_2_upload_pairs_bohol } from "./app_language_2_upload_pairs_bohol.mjs";
export async function app_language_2_upload_pairs_bohol_cache(
  language_from,
  language_to,
  limit,
) {
  let fn = app_language_2_upload_pairs_bohol;
  let args = [language_from, language_to, limit];
  let v = await function_cache_force(fn, args);
  return v;
}
