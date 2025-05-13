import { folder_external_root } from "./folder_external_root.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_books_apocrypha } from "./bible_books_apocrypha.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function sandbox_3() {
  let bible_folder = "engwebu";
  let books = await bible_books_apocrypha(bible_folder);
  let first = list_first(books);
  let verses = await bible_chapter(
    bible_folder,
    string_combine_multiple([first, "01"]),
  );
  let v = list_join_space(
    list_map(list_map_property(verses, "tokens"), list_join_space),
  );
  ("D:programsWPy64-312100scriptspython.bat ../file.py input.txt output");
  folder_external_root();
  return v;
}
