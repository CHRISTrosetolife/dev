import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { app_language_2_upload_pairs_bohol_cache } from "./app_language_2_upload_pairs_bohol_cache.mjs";
import { app_ceb3_group_index } from "./app_ceb3_group_index.mjs";
export async function app_ceb3_upload() {
  let from = "ceb";
  let to = "en";
  let limit = 1000;
  let language_to = "Cebuano";
  let language_from = "English";
  let name = app_ceb3_group_index();
  let pairs = await app_language_2_upload_pairs_bohol_cache(
    language_from,
    language_to,
    limit,
  );
  await app_language_2_upload_pairs(pairs, from, to, name);
}
