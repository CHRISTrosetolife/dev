import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { app_tgl_upload_pairs_cache } from "./app_tgl_upload_pairs_cache.mjs";
export async function app_tgl_upload() {
  let from = "tgl";
  let to = "en";
  let limit = 1000;
  let pairs = await app_tgl_upload_pairs_cache(limit);
  return await app_language_2_upload_pairs(pairs, from, to);
}
