import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
import { string_combine } from "./string_combine.mjs";
import { html_parse } from "./html_parse.mjs";
import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_chapter_parsed(bible_folder, chapter_name) {
  let folder = folder_gitignore_path(bible_folder);
  let chapter_path = string_combine(chapter_name, ".htm");
  string_combine_multiple([url_secure(), "ebible.org/", bible_folder, "/"]);
  let joined = path_join([folder, chapter_path]);
  let read = await file_read(joined);
  let parsed = html_parse(read);
  let notemarks = parsed.querySelectorAll(".notemark");
  for (let n of notemarks) {
    n.remove();
  }
  return parsed;
}
