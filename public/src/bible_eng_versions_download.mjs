import { http_file_parent } from "./http_file_parent.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { each_log_async } from "./each_log_async.mjs";
import { folder_unzip } from "./folder_unzip.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_ebible_url_combine } from "./bible_ebible_url_combine.mjs";
import { http_file } from "./http_file.mjs";
export async function bible_eng_versions_download() {
  let bible_folders = bible_eng_versions();
  await each_log_async(bible_folders, async (bible_folder) => {
    let url = bible_ebible_url_combine(
      string_combine_multiple(["Scriptures/", bible_folder, "_html.zip"]),
    );
    await http_file(url);
  });
  let output_parent = http_file_parent();
  await folder_unzip(output_parent);
}
