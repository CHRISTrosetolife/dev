import { storage_files } from "./storage_files.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { list_first } from "./list_first.mjs";
import { path_join } from "./path_join.mjs";
import { file_exists } from "./file_exists.mjs";
export async function storage_files_download(prefix) {
  let files = await storage_files(prefix);
  let f = list_first(files);
  let destination = folder_gitignore_path(path_join(["firebase", f.name]));
  if (await file_exists(destination)) {
    return;
  }
  await folder_parent_exists_ensure(destination);
  return f.download({
    destination,
  });
}
