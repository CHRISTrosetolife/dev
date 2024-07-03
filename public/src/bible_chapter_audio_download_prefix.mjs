import { bible_chapter_folder_parent } from "./bible_chapter_folder_parent.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
export function bible_chapter_audio_download_prefix(folder_name, chapter_name) {
  let folder_parent = folder_audio_bible();
  let r = bible_chapter_folder_parent(folder_parent, chapter_name, folder_name);
  return r;
}
