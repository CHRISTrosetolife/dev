import { app_language_2_upload_pairs_get } from "./app_language_2_upload_pairs_get.mjs";
import { definition_bohol } from "./definition_bohol.mjs";
export async function app_language_2_upload_pairs_en_ur(
  language_from,
  language_to,
  limit,
) {
  let definitions_get = async function (w) {
    let v = await definition_bohol(w, language_from, language_to);
    return v;
  };
  let v2 = await app_language_2_upload_pairs_get(definitions_get, limit);
  return v2;
}
