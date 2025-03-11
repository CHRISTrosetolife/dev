import { function_cache_force } from "./function_cache_force.mjs";
import { app_language_2_upload_pairs_ceb2 } from "./app_language_2_upload_pairs_ceb2.mjs";
export async function app_language_2_upload_pairs_ceb2_cache(limit) {
  let v = await function_cache_force(app_language_2_upload_pairs_ceb2, [limit]);
  return v;
}
