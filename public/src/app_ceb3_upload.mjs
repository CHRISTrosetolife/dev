import { app_language_2_upload_pairs_ceb2 } from "./app_language_2_upload_pairs_ceb2.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
import { app_ceb3_group_index } from "./app_ceb3_group_index.mjs";
export async function app_ceb3_upload() {
  let from = "ceb";
  let to = "en";
  let limit = 10000;
  let name = app_ceb3_group_index();
  let pairs = await app_language_2_upload_pairs_ceb2(limit);
  await app_language_2_upload_pairs(pairs, from, to, name);
}
