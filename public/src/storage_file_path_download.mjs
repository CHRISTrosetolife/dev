import { firebase_download } from "./firebase_download.mjs";
import { storage_file_path_download_generic } from "./storage_file_path_download_generic.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { web_is } from "./web_is.mjs";
export async function storage_file_path_download(storage_path) {
  if (web_is()) {
    let v2 = await firebase_download(storage_path);
    return v2;
  }
  let download_lambda = storage_file_download;
  let v = await storage_file_path_download_generic(
    storage_path,
    download_lambda,
  );
  return v;
}
