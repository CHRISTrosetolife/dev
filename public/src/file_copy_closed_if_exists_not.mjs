import { file_copy_closed } from "./file_copy_closed.mjs";
import { file_exists_not } from "./file_exists_not.mjs";
export async function file_copy_closed_if_exists_not(p, chapter_path) {
  if (await file_exists_not(p)) {
    await file_copy_closed(chapter_path, p);
  }
}
