import { each_object_unordered_async } from "./each_object_unordered_async.mjs";
import { git_ac_message } from "./git_ac_message.mjs";
import { app_code_property_message } from "./app_code_property_message.mjs";
import { app_code_property_contents } from "./app_code_property_contents.mjs";
import { app_code_local_files_path_latest } from "./app_code_local_files_path_latest.mjs";
import { app_code_batches } from "./app_code_batches.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { app_code_file_name_latest } from "./app_code_file_name_latest.mjs";
import { app_code_local_user_path } from "./app_code_local_user_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
export async function app_code_local_download(username) {
  let latest_path_user = app_code_local_user_path(
    username,
    app_code_file_name_latest(),
  );
  let latest_user = await storage_file_download(latest_path_user);
  let when_user = object_property_get(latest_user, "when");
  let when_user_date = new Date(when_user);
  let latest_path_local = app_code_local_files_path_latest();
  let latest_local = await storage_file_download(latest_path_local);
  let when_local = object_property_get(latest_local, "when");
  let when_local_date = new Date(when_local);
  if (when_local_date > when_user_date) {
    return;
  }
  let batch_path = object_property_get(latest_user, "batch_path");
  let batches = await app_code_batches(batch_path, username);
  await each_async(batches, async function (batch) {
    let files = object_property_get(batch, "files");
    let message = object_property_get(batch, app_code_property_message());
    await each_object_unordered_async(files, async function (file_path, value) {
      let contents = object_property_get(value, app_code_property_contents());
      await file_overwrite(file_path, contents);
    });
    await git_ac_message(message);
  });
}
