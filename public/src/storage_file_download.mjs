import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
import { path_join } from "./path_join.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export async function storage_file_download(firebase_file) {
  let destination = folder_gitignore_path(
    path_join(["firebase", firebase_file.name]),
  );
  if (await file_exists_not(destination)) {
    await folder_parent_exists_ensure(destination);
    firebase_file.download({
      destination,
    });
  }
}
