import { storage_files_names } from "./storage_files_names.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
import { list_first } from "./list_first.mjs";
import { path_join } from "./path_join.mjs";
export async function storage_files_download(prefix) {
  let file_names = await storage_files_names(prefix);
  let file_name = list_first(file_names);
  let bucket = await storage_bucket();
  let f = bucket.file(file_name);
  let destination = folder_gitignore_path(path_join(["firebase", f.name]));
  await folder_parent_exists_ensure(destination);
  return f.download({
    destination,
  });
}
