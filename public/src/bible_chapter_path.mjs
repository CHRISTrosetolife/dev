import { string_combine } from "./string_combine.mjs";
import { http_file } from "./http_file.mjs";
import { bible_zip_url } from "./bible_zip_url.mjs";
import { unzip } from "./unzip.mjs";
import { http_file_path } from "./http_file_path.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_chapter_path(bible_folder, chapter_name) {
  let url = bible_zip_url(bible_folder);
  await http_file(url);
  let file_path_output = http_file_path(url);
  let output_folder = await unzip(file_path_output);
  let output_path = path_join([
    output_folder,
    string_combine(chapter_name, ".htm"),
  ]);
  return output_path;
}
