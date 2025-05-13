import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_books_apocrypha } from "./bible_books_apocrypha.mjs";
import { list_first } from "./list_first.mjs";
export async function sandbox_3() {
  let bible_folder = "engwebu";
  let books = await bible_books_apocrypha(bible_folder);
  let first = list_first(books);
  let v = await bible_chapter(
    bible_folder,
    string_combine_multiple([first, "01"]),
  );
  return v;
}
