import { storage_files } from "./storage_files.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { storage_bucket } from "./storage_bucket.mjs";
import { list_first } from "./list_first.mjs";
import { path_join } from "./path_join.mjs";
export async function storage_files_download(prefix) {
  let files = await storage_files(prefix);
  let file = list_first(files);
  let bucket = await storage_bucket();
  let f = bucket.file(file_name);
  let destination = folder_gitignore_path(path_join(["firebase", f.name]));
  await folder_parent_exists_ensure(destination);
  return f.download({
    destination,
  });
}
