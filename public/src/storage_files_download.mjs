import { list_map_async } from "./list_map_async.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { storage_files } from "./storage_files.mjs";
export async function storage_files_download(prefix) {
  let files = await storage_files(prefix);
  let v = await list_map_async(files, async function (firebase_file) {
    await storage_file_download(firebase_file);
  });
  return v;
}
