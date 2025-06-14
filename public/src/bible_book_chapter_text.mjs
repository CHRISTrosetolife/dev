import { bible_book_name } from "./bible_book_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export function bible_book_chapter_text(book_code, chapter) {
  let v = string_combine_multiple([
    "📖 Chapter ",
    bible_book_name(book_code),
    " ",
    chapter,
  ]);
  return v;
}
