import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { watch_git_pause_path } from "./watch_git_pause_path.mjs";
export async function watch_git_unpause() {
  let p = watch_git_pause_path();
  await file_delete_if_exists(p);
}
