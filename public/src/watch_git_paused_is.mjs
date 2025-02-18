import { watch_git_pause_path } from "./watch_git_pause_path.mjs";
import { file_exists } from "./file_exists.mjs";
export async function watch_git_paused_is() {
  return await file_exists(watch_git_pause_path());
}
