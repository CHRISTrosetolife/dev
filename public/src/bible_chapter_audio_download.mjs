import { bible_chapter_name_to_book } from "./bible_chapter_name_to_book.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_take } from "./string_take.mjs";
export async function bible_chapter_audio_download(bible_folder, chapter_name) {
  let verses = await bible_chapter(bible_folder, chapter_name);
  let book_code = string_take(chapter_name, 3);
  bible_chapter_name_to_book(chapter_name);
  let verse_numbers = list_map_property(verses, "verse_number");
  folder_audio_bible();
}
