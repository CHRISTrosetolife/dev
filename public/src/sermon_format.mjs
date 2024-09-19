import { string_digits_is } from "./string_digits_is.mjs";
import { string_first } from "./string_first.mjs";
import { string_replace } from "./string_replace.mjs";
import { file_read } from "./file_read.mjs";
import { sermon_path } from "./sermon_path.mjs";
import { string_split_newline } from "./string_split_newline.mjs";
import { list_filter } from "./list_filter.mjs";
import { string_empty_is } from "./string_empty_is.mjs";
export async function sermon_format(name) {
  let sermon_path_file = sermon_path(name);
  let text = await file_read(sermon_path_file);
  text = string_replace(text, "\r", "");
  let lines = string_split_newline(text);
  return list_filter(lines, (line) => {
    if (string_empty_is(line)) {
      return true;
    }
    let first = string_first(line);
    if (string_digits_is(first)) {
      return true;
    }
    return false;
  });
  return lines;
}
