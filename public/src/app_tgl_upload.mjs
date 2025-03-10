import { app_language_2_upload_pairs_bohol_cache } from "./app_language_2_upload_pairs_bohol_cache.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
export async function app_tgl_upload() {
  let from = "tgl";
  let to = "en";
  let limit = 1000;
  let language_to = "Tagalog";
  let language_from = "English";
  let pairs = await app_language_2_upload_pairs_bohol_cache(
    language_from,
    language_to,
    limit,
  );
  let v = await app_language_2_upload_pairs(pairs, from, to);
  return v;
}
