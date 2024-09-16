import { bible_zip_url } from "./bible_zip_url.mjs";
import { unzip } from "./unzip.mjs";
import { http_file_path } from "./http_file_path.mjs";
export async function bible_chapter_path(bible_folder, chapter_name) {
  let url = bible_zip_url(bible_folder);
  let file_path_output = http_file_path(url);
  let output_path = await unzip(file_path_output);
}
