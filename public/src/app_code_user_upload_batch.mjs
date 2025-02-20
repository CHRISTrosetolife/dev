import { app_code_latest_object } from "./app_code_latest_object.mjs";
import { app_code_file_name_latest } from "./app_code_file_name_latest.mjs";
import { app_code_user_upload } from "./app_code_user_upload.mjs";
import { app_code_batch_name_when } from "./app_code_batch_name_when.mjs";
import { date_now } from "./date_now.mjs";
import { app_code_property_message } from "./app_code_property_message.mjs";
import { app_code_batch_path_get } from "./app_code_batch_path_get.mjs";
export async function app_code_user_upload_batch(
  files,
  batch_message,
  context,
) {
  let batch_path_previous = await app_code_batch_path_get();
  let batch_new = {
    files,
    batch_path_previous,
    [app_code_property_message()]: batch_message,
  };
  let when = date_now();
  let batch_name = await app_code_batch_name_when(when);
  let batch_path = await app_code_user_upload(context, batch_name, batch_new);
  await app_code_user_upload(
    context,
    app_code_file_name_latest(),
    app_code_latest_object(batch_path, when),
  );
}
