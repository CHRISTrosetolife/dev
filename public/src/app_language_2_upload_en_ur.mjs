import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { app_language_2_upload_pairs_bohol_cache } from "./app_language_2_upload_pairs_bohol_cache.mjs";
export async function app_language_2_upload_en_ur(
  language_from,
  language_to,
  limit,
  from,
  to,
) {
  let pairs = await app_language_2_upload_pairs_bohol_cache(
    language_from,
    language_to,
    limit,
  );
  await app_language_2_upload_pairs(pairs, from, to);
}
