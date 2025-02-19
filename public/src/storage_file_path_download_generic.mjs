import { file_read } from "./file_read.mjs";
import { storage_file_download_path } from "./storage_file_download_path.mjs";
import { storage_file } from "./storage_file.mjs";
export async function storage_file_path_download_generic(
  latest_path_user,
  download_lambda,
) {
  let f = await storage_file(latest_path_user);
  await download_lambda(f);
  let destination = storage_file_download_path(f);
  let v = await file_read(destination);
  return v;
}
