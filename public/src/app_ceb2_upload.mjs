import { app_language_2_upload_pairs_ceb2 } from "./app_language_2_upload_pairs_ceb2.mjs";
import { app_language_2_upload_pairs } from "./app_language_2_upload_pairs.mjs";
export async function app_ceb2_upload() {
  let from = "ceb";
  let to = "en";
  let limit = 2000;
  let pairs = await app_language_2_upload_pairs_ceb2(limit);
  await app_language_2_upload_pairs(pairs, from, to);
}
