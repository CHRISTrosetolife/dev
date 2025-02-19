import { storage_file_path_download_generic } from "./storage_file_path_download_generic.mjs";
import { storage_file_download_force } from "./storage_file_download_force.mjs";
export async function storage_file_path_download_force(latest_path_user) {
  let download_lambda = storage_file_download_force;
  let v = await storage_file_path_download_generic(
    latest_path_user,
    download_lambda,
  );
  return v;
}
