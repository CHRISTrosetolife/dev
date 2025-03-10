import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { function_cache_delete_generic } from "./function_cache_delete_generic.mjs";
import { app_language_2_upload_pairs_bohol } from "./app_language_2_upload_pairs_bohol.mjs";
import { function_cache } from "./function_cache.mjs";
export async function app_language_2_upload_pairs_bohol_cache(
  language_from,
  language_to,
  limit,
) {
  let fn = app_language_2_upload_pairs_bohol;
  let args = [language_from, language_to, limit];
  await function_cache_delete_generic(fn.name, args, file_delete_if_exists);
  let v = await function_cache(fn, args);
  return v;
}
