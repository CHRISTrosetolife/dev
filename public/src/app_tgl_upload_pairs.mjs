import { app_language_2_upload_pairs_bohol } from "./app_language_2_upload_pairs_bohol.mjs";
export async function app_tgl_upload_pairs(limit) {
  let language_to = "Tagalog";
  let language_from = "English";
  let v = await app_language_2_upload_pairs_bohol(
    language_from,
    limit,
    language_to,
  );
  return v;
}
