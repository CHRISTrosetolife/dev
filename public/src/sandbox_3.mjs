import { list_join } from "./list_join.mjs";
import { folder_external_root } from "./folder_external_root.mjs";
import { uuid_file } from "./uuid_file.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_books_apocrypha } from "./bible_books_apocrypha.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { file_write } from "./file_write.mjs";
export async function sandbox_3() {
  let bible_folder = "engwebu";
  let books = await bible_books_apocrypha(bible_folder);
  let first = list_first(books);
  let verses = await bible_chapter(
    bible_folder,
    string_combine_multiple([first, "01"]),
  );
  let text = list_join_space(
    list_map(list_map_property(verses, "tokens"), list_join_space),
  );
  await uuid_file(sandbox_3, async function (file_path) {
    await file_write(file_path, text);
  });
  ("D:\\ ../file.py input.txt output");
  let program = folder_external_root(
    "programs\\WPy64-312100\\scripts\\python.bat",
  );
  list_join([program, "py/tts.py"]);
  return text;
}
