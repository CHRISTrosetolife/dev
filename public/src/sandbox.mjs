import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { folder_files_move } from "./folder_files_move.mjs";
import { yyy8Uu_translate_upload } from "./yyy8Uu_translate_upload.mjs";
import { yyy8Uu_translate } from "./yyy8Uu_translate.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
import { string_combine } from "./string_combine.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function sandbox() {
  let prefix = 'https://www.learnentry.com/english-to-cebuano/dictionary/words-start-with-a?page=';
  let page_number = `1`;
  let parsed = await html_cache_parse(string_combine_multiple([prefix, page_number]));
  let mapped3 = html_parse_a_href_starts_with(parsed, prefix);
  return mapped3;
  const input_directory = "C:\\Users\\JESUS\\Pictures\\Screenshots";
  let output_directory = "C:\\Users\\JESUS\\dev\\public\\img\\demo\\2024_05_19";
  const file_extension = ".png";
  await folder_files_move(input_directory, file_extension, output_directory);
  return;
  if (false) {
    await yyy8Uu_translate_upload();
  }
  let filtered = await yyy8Uu_translate();
  return;
  let result = await yyy8Uu_parts(index);
  return list;
  return;
  await each_index_async(filtered, async (file_path, index) => {
    await yyy8Uu_file_path_to_parts(filtered, index);
  });
}
