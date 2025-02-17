import { log } from "./log.mjs";
import { storage_file_download } from "./storage_file_download.mjs";
import { storage_file } from "./storage_file.mjs";
export async function storage_file_path_download(latest_path_user) {
  let f = await storage_file(latest_path_user);
  let latest_user = await storage_file_download(f);
  log({
    f,
    latest_user,
  });
  return latest_user;
}
