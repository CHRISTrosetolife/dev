import { app_language_2_upload_pairs_en_ur_cache } from "./app_language_2_upload_pairs_en_ur_cache.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
export async function app_language_2_upload_en_ur(limit, from, to) {
  let pairs = await app_language_2_upload_pairs_en_ur_cache(limit);
  await app_language_2_upload_pairs(pairs, from, to, "all");
}
