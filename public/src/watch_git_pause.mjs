import { file_overwrite } from "./file_overwrite.mjs";
import { watch_git_pause_path } from "./watch_git_pause_path.mjs";
export async function watch_git_pause() {
  let p = watch_git_pause_path();
  await file_overwrite(p, "");
}
