import { log } from "./log.mjs";
import { function_cache_refresh_args } from "./function_cache_refresh_args.mjs";
import { app_language_2_upload_pairs_bohol } from "./app_language_2_upload_pairs_bohol.mjs";
export async function app_language_2_upload_pairs_bohol_cache(
  language_from,
  language_to,
  limit,
) {
  log("app_language_2_upload_pairs_bohol_cache");
  let v = await function_cache_refresh_args(app_language_2_upload_pairs_bohol, [
    language_from,
    language_to,
    limit,
  ]);
  return v;
}
