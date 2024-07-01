import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { storage_files } from "./storage_files.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
import { list_first } from "./list_first.mjs";
import { path_join } from "./path_join.mjs";
export async function storage_files_download(prefix) {
  let file_names = await storage_files(prefix);
  let file_name = list_first(file_names);
  let bucket = await storage_bucket();
  let f = bucket.file(file_name);
  f.download({
    destination: folder_gitignore_path(path_join(["firebase", f.name])),
  });
  return f;
}
