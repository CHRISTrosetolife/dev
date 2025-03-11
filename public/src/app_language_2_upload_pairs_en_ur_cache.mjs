import { function_cache_force } from "./function_cache_force.mjs";
import { app_language_2_upload_pairs_en_ur } from "./app_language_2_upload_pairs_en_ur.mjs";
export async function app_language_2_upload_pairs_en_ur_cache(limit) {
  let v = await function_cache_force(app_language_2_upload_pairs_en_ur, [
    limit,
  ]);
  return v;
}
