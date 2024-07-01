import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { path_join } from "./path_join.mjs";
export function bible_chapter_audio_download_prefix(
  folder_name,
  book_code,
  chapter_code,
) {
  return path_join([
    folder_audio_bible(),
    folder_name,
    book_code,
    chapter_code,
    "/",
  ]);
}
