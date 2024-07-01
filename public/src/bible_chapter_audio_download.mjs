import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_chapter_audio_download(bible_folder, chapter_name) {
  let folder_name = "test";
  let verses = await bible_chapter(bible_folder, chapter_name);
  let { book_code, chapter_code } = bible_chapter_name_parse(chapter_name);
  let verse_numbers = list_map_property(verses, "verse_number");
  return path_join([folder_audio_bible(), book_code, chapter_code, "/"]);
}
