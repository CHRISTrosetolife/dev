import { storage_file_path_download } from "./storage_file_path_download.mjs";
import { json_from } from "./json_from.mjs";
export async function storage_file_path_download_json(latest_path_user) {
  let v = await storage_file_path_download(latest_path_user);
  let p = json_from(v);
  return p;
}
