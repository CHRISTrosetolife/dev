import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { app_language_2_upload_pairs_bohol_cache } from "./app_language_2_upload_pairs_bohol_cache.mjs";
export async function app_ceb2_upload() {
  let from = "ceb";
  let to = "en";
  let limit = 1000;
  let language_to = "Cebuano";
  let language_from = "English";
  let pairs = await app_language_2_upload_pairs_bohol_cache(
    language_from,
    language_to,
    limit,
  );
  await app_language_2_upload_pairs(pairs, from, to);
}
