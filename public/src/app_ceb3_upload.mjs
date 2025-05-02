import { app_ceb3_group_index } from "./app_ceb3_group_index.mjs";
import { app_language_2_upload_bohol } from "./app_language_2_upload_bohol.mjs";
export async function app_ceb3_upload() {
  let from = "ceb";
  let to = "en";
  let limit = 1000;
  let language_to = "Cebuano";
  let language_from = "English";
  await app_language_2_upload_bohol(
    language_from,
    language_to,
    limit,
    from,
    to,
    app_ceb3_group_index(),
  );
}
