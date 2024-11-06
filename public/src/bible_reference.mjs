import { bible_chapter_unpadded } from "./bible_chapter_unpadded.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_reference(book_name, chapter, verse_number) {
  chapter = bible_chapter_unpadded(chapter);
  return string_combine_multiple([book_name, " ", chapter, ":", verse_number]);
}
