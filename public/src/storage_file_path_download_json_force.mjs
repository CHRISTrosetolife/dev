import { storage_file_path_download_force } from "./storage_file_path_download_force.mjs";
import { json_from } from "./json_from.mjs";
export async function storage_file_path_download_json_force(latest_path_user) {
  let v = await storage_file_path_download_force(latest_path_user);
  let p = json_from(v);
  return p;
}
