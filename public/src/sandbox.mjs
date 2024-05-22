import { keyboard_keys } from "./keyboard_keys.mjs";
import { not } from "./not.mjs";
import { log } from "./log.mjs";
import { string_to } from "./string_to.mjs";
import { add_1 } from "./add_1.mjs";
import { html_parse_a_href_starts_with } from "./html_parse_a_href_starts_with.mjs";
import { html_cache_parse } from "./html_cache_parse.mjs";
import { folder_files_move } from "./folder_files_move.mjs";
import { yyy8Uu_translate_upload } from "./yyy8Uu_translate_upload.mjs";
import { yyy8Uu_translate } from "./yyy8Uu_translate.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_sort_string } from "./list_sort_string.mjs";
import { identity } from "./identity.mjs";
export async function sandbox() {
  await ceb_dictionary_page_each(log);
  return;
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
async function ceb_dictionary_page_each(lambda) {
    let letters = keyboard_keys();
    list_sort_string(letters, identity);
    for (let letter of letters) {
        let page_number = 1;
        while (true) {
            let prefix = `https://www.learnentry.com/english-to-cebuano/dictionary/words-start-with-${letter}?page=`;
            const url = string_combine_multiple([prefix, page_number]);
            let parsed = await html_cache_parse(url);
            const v = {
                url,
                letter,
                page_number,
                parsed
            };
            lambda(v);
            let mapped3 = html_parse_a_href_starts_with(parsed, prefix);
            page_number = add_1(page_number);
            let page_number_string = string_to(page_number);
            if (not(list_includes(mapped3, page_number_string))) {
                break;
            }
        }
    }
}

