import { bible_chapter } from "./bible_chapter.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
export async function bible_chapter_audio_download(bible_folder) {
  return await bible_chapter(bible_folder);
  folder_audio_bible();
}
