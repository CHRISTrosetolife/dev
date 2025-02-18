import { file_overwrite_empty } from "./file_overwrite_empty.mjs";
import { watch_git_pause_path } from "./watch_git_pause_path.mjs";
export async function watch_git_unpause() {
  let p = watch_git_pause_path();
  await file_overwrite_empty(p);
}
