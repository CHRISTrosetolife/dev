import { list_adder_async } from "./list_adder_async.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { number_pad_2 } from "./number_pad_2.mjs";
import { bible_chapters_each } from "./bible_chapters_each.mjs";
import { command_line } from "./command_line.mjs";
import { log } from "./log.mjs";
import { path_join } from "./path_join.mjs";
import { folder_external_root } from "./folder_external_root.mjs";
import { file_write } from "./file_write.mjs";
import { uuid_file } from "./uuid_file.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_books_apocrypha } from "./bible_books_apocrypha.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_space } from "./list_join_space.mjs";
export async function sandbox_3() {
  let bible_folder = "engwebu";
  let books = await bible_books_apocrypha(bible_folder);
  let outputs = await list_adder_async(async function (la) {
    await each_index_async(books, async function (book, book_index) {
      let book_index_padded = number_pad_2(book_index);
      await bible_chapters_each(bible_folder, book, async function (chapter) {
        let verses = await bible_chapter(bible_folder, chapter);
        let text = list_join_space(
          list_map(list_map_property(verses, "tokens"), list_join_space),
        );
        let output_path = folder_external_root(
          path_join([
            "bible",
            "english",
            bible_folder,
            "apocrypha",
            string_combine_multiple([book_index_padded, "_", chapter]),
          ]),
        );
        let program = folder_external_root(
          "programs\\WPy64-312100\\scripts\\python.bat",
        );
        await uuid_file(sandbox_3, async function (file_path) {
          let command = list_join_space([
            program,
            "py/tts.py",
            file_path,
            output_path,
          ]);
          log({
            command,
          });
          await file_write(file_path, text);
          let result = await command_line(command);
          log(result);
        });
      });
    });
  });
}
