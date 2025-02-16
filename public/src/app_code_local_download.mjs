import { list_adder_async } from "./list_adder_async.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { app_code_file_name_latest } from "./app_code_file_name_latest.mjs";
import { app_code_local_user_path } from "./app_code_local_user_path.mjs";
export async function app_code_local_download(username) {
  let file_path_latest = app_code_local_user_path(
    username,
    app_code_file_name_latest(),
  );
  let latest_object = await storage_file_download(file_path_latest);
  let batch_path = object_property_get(latest_object, "batch_path");
  let batch = await current_get(batch_path);
  let batches = await list_linked_traverse(batch, next_get, next_exists);
  async function current_get(batch_path) {
    let file_path_batch = app_code_local_user_path(username, batch_path);
    let batch = await storage_file_download(file_path_batch);
    return batch;
  }
  function next_exists(batch) {
    let v = object_property_exists(batch, "batch_path_previous");
    return v;
  }
  async function next_get(batch) {
    let batch_path = object_property_get(batch, "batch_path_previous");
    let v2 = await current_get(batch_path);
    return v2;
  }
  async function list_linked_traverse(first, next_get, next_exists) {
    let v3 = await list_adder_async(async function (la) {
      la(first);
      let current = first;
      while (next_exists(current)) {
        current = await next_get(current);
        la(current);
      }
    });
    return v3;
  }
}
