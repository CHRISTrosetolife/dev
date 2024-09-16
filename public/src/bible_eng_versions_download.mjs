import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_ebible_url_combine } from "./bible_ebible_url_combine.mjs";
import { http_file } from "./http_file.mjs";
import { each_async } from "./each_async.mjs";
import { bible_eng_versions_new } from "./bible_eng_versions_new.mjs";
export async function bible_eng_versions_download() {
  let bible_folders = bible_eng_versions_new();
  await each_async(bible_folders, async (bible_folder) => {
    let url = bible_ebible_url_combine(
      string_combine_multiple(["Scriptures/", bible_folder, ".zip"]),
    );
    await http_file(url);
  });
}
