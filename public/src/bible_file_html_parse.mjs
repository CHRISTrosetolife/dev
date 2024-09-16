import { html_parse } from "./html_parse.mjs";
import { bible_file } from "./bible_file.mjs";
export async function bible_file_html_parse(bible_folder, chapter_name) {
  let html = await bible_file(bible_folder, chapter_name);
  let root = await html_parse(html);
  return root;
}
