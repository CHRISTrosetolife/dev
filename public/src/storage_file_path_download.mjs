import { storage_file_path_download_generic } from "./storage_file_path_download_generic.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
export async function storage_file_path_download(storage_path) {
  if (false) {
  }
  let download_lambda = storage_file_download;
  let v = await storage_file_path_download_generic(
    storage_path,
    download_lambda,
  );
  return v;
}
