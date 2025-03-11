import { app_language_2_upload_en_ur } from "./app_language_2_upload_en_ur.mjs";
export async function app_en_ur_upload() {
  let from = "en";
  let to = "ur";
  let limit = 1000;
  await app_language_2_upload_en_ur(limit, from, to);
}
