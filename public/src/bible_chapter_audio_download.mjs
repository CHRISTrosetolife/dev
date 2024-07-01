import { bible_book_code_size } from "./bible_book_code_size.mjs";
import { bible_chapter_name_to_book_code } from "./bible_chapter_name_to_book_code.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { folder_audio_bible } from "./folder_audio_bible.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_skip } from "./string_skip.mjs";
export async function bible_chapter_audio_download(bible_folder, chapter_name) {
  let verses = await bible_chapter(bible_folder, chapter_name);
  let book_code = bible_chapter_name_to_book_code(chapter_name);
  let chapter_code = string_skip(chapter_name, bible_book_code_size());
  let verse_numbers = list_map_property(verses, "verse_number");
  folder_audio_bible();
}
