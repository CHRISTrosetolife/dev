import { path_join } from "./path_join.mjs";
import { log } from "./log.mjs";
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
import { command_line } from "./command_line.mjs";
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
  $eia;
  await uuid_file(sandbox_3, async function (file_path) {
    await file_write(file_path, text);
    let output_path = folder_external_root(
      path_join(["bible\\english", bible_folder, "apocrypha"]),
    );
    let program = folder_external_root(
      "programs\\WPy64-312100\\scripts\\python.bat",
    );
    let command = list_join_space([
      program,
      "py/tts.py",
      file_path,
      output_path,
    ]);
    log({
      command,
    });
    let result = await command_line(command);
    log(result);
  });
}
