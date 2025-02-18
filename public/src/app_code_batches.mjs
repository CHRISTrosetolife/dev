import { storage_file_path_download_json } from "./storage_file_path_download_json.mjs";
import { app_code_batch_previous_exists } from "./app_code_batch_previous_exists.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_reverse } from "./list_reverse.mjs";
import { list_linked_traverse } from "./list_linked_traverse.mjs";
export async function app_code_batches(batch_path, username) {
  let batch = await storage_file_path_download_json(batch_path);
  let batches = await list_linked_traverse(
    batch,
    previous_get,
    app_code_batch_previous_exists,
  );
  list_reverse(batches);
  async function previous_get(batch) {
    let batch_path = object_property_get(batch, "batch_path_previous");
    let v2 = await storage_file_path_download_json(batch_path);
    return v2;
  }
  return batches;
}
