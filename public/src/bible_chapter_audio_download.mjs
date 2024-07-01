import { bible_chapter } from "./bible_chapter.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function bible_chapter_audio_download(bible_folder, chapter_name) {
  let verses = await bible_chapter(bible_folder, chapter_name);
  list_map_property(verses, "verse_number");
  folder_audio_bible();
}
