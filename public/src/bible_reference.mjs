import { bible_reference_separator } from "./bible_reference_separator.mjs";
import { bible_chapter_unpadded } from "./bible_chapter_unpadded.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_reference(book_name, chapter, verse_number) {
  chapter = bible_chapter_unpadded(chapter);
  let v = string_combine_multiple([
    book_name,
    " ",
    chapter,
    bible_reference_separator(),
    verse_number,
  ]);
  return v;
}
