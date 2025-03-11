import { defintion_en_ur } from "./defintion_en_ur.mjs";
import { app_language_2_upload_pairs_get } from "./app_language_2_upload_pairs_get.mjs";
export async function app_language_2_upload_pairs_en_ur(limit) {
  let v2 = await app_language_2_upload_pairs_get(defintion_en_ur, limit);
  return v2;
}
