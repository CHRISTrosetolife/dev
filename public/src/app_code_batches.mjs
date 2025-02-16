import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { app_code_local_user_path } from "./app_code_local_user_path.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_linked_traverse } from "./list_linked_traverse.mjs";
export async function app_code_batches(batch_path, username) {
  let batch = await current_get(batch_path);
  let batches = await list_linked_traverse(batch, next_get, next_exists);
  list_reverse(batches);
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
  return batches;
}
