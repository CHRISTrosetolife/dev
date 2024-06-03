import { path_join } from "./path_join.mjs";
import { string_combine } from "./string_combine.mjs";
import { url_secure } from "./url_secure.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function bible_chapter_parsed(bible_folder, chapter_name) {
  let url_base = string_combine_multiple([
    url_secure(),
    "ebible.org/",
    bible_folder,
    "/",
  ]);
  let chapter_path = string_combine(chapter_name, ".htm");
  let joined = path_join([url_base, chapter_path]);
  let parsed = await http_cache_parse(joined);
  let notemarks = parsed.querySelectorAll(".notemark");
  for (let n of notemarks) {
    n.remove();
  }
  return parsed;
}
