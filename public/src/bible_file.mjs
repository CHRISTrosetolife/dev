import { bible_chapter_path } from "./bible_chapter_path.mjs";
import { file_read } from "./file_read.mjs";
export async function bible_file(bible_folder, chapter_name) {
  return await file_read(await bible_chapter_path(bible_folder, chapter_name));
}
