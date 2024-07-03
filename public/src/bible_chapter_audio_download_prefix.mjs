import { bible_chapter_folder } from "./bible_chapter_folder.mjs";
import { list_add } from "./list_add.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { path_join } from "./path_join.mjs";
export function bible_chapter_audio_download_prefix(folder_name, chapter_name) {
  let folder_parent = folder_audio_bible();
  let paths = [folder_parent];
  let p = bible_chapter_folder(chapter_name, folder_name);
  list_add(paths, p);
  let r = path_join(paths);
  return r;
}
