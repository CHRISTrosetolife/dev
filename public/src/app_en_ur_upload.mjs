import { app_language_2_upload_bohol } from "./app_language_2_upload_bohol.mjs";
export async function app_en_ur_upload() {
  let from = "tgl";
  let to = "en";
  let limit = 1000;
  let language_to = "Tagalog";
  let language_from = "English";
  await app_language_2_upload_bohol(
    language_from,
    language_to,
    limit,
    from,
    to,
  );
}
