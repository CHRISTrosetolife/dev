import { storage_file_download_path } from "./storage_file_download_path.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { storage_file } from "./storage_file.mjs";
import { file_read } from "./file_read.mjs";
export async function storage_file_path_download(latest_path_user) {
  let f = await storage_file(latest_path_user);
  await storage_file_download(f);
  let destination = storage_file_download_path(f);
  let v = await file_read(destination);
  return v;
}
