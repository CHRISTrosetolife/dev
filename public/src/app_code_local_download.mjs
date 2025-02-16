import { app_code_local_files_path_latest } from "./app_code_local_files_path_latest.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { app_code_batches } from "./app_code_batches.mjs";
import { each_async } from "./each_async.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { app_code_file_name_latest } from "./app_code_file_name_latest.mjs";
import { app_code_local_user_path } from "./app_code_local_user_path.mjs";
export async function app_code_local_download(username) {
  let latest_path_user = app_code_local_user_path(
    username,
    app_code_file_name_latest(),
  );
  let latest_user = await storage_file_download(latest_path_user);
  let latest_path_local = app_code_local_files_path_latest();
  let latest_local = await storage_file_download(latest_path_local);
  let when = object_property_get(latest_local, "when");
  let batch_path = object_property_get(latest_user, "batch_path");
  let batches = await app_code_batches(batch_path, username);
  await each_async(batches, async function (batch) {
    let files = object_property_get(batch, "files");
    await each_object_async(files, async function (file, value) {});
  });
}
