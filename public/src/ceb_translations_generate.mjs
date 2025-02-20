import { function_new_generic_code } from "./function_new_generic_code.mjs";
import { js_code_statement_return } from "./js_code_statement_return.mjs";
import { folder_read } from "./folder_read.mjs";
import { file_read } from "./file_read.mjs";
import { newline } from "./newline.mjs";
import { string_split } from "./string_split.mjs";
import { string_get } from "./string_get.mjs";
import { list_join } from "./list_join.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_adder } from "./list_adder.mjs";
import { string_delimit } from "./string_delimit.mjs";
export async function ceb_translations_generate() {
  let folder = string_combine_multiple([
    "./translations/ceb/learnentry/letters/",
  ]);
  let extension = string_combine_multiple([".txt"]);
  let words = {};
  let files = await folder_read(folder, extension);
  for (let file of files) {
    let contents = await file_read(file);
    let lines = string_split(contents, newline());
    for (let line of lines) {
      let split = string_split(line, "\t");
      let first = string_get(split, 0);
      let second = string_get(split, 1);
      words[first] = second;
    }
  }
  let pairs = list_adder((la) => {
    for (let word in words) {
      let value = object_property_get(words, word);
      la(
        string_combine_multiple([
          string_delimit(word),
          ":",
          string_delimit(value),
        ]),
      );
    }
  });
  let entries_string = list_join(pairs, ", ");
  let body_string = js_code_statement_return(
    string_combine_multiple(["{ ", entries_string, " }"]),
  );
  await function_new_generic_code(
    string_combine_multiple(["ceb_translations"]),
    string_combine_multiple([]),
    body_string,
    false,
    [],
    false,
    false,
  );
}
