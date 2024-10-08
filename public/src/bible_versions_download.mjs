import { folder_unzip } from "./folder_unzip.mjs";
import { http_file_parent } from "./http_file_parent.mjs";
import { http_file } from "./http_file.mjs";
import { bible_zip_url } from "./bible_zip_url.mjs";
import { each_log_async } from "./each_log_async.mjs";
export async function bible_versions_download(bible_folders) {
  await each_log_async(bible_folders, async (bible_folder) => {
    let url = bible_zip_url(bible_folder);
    await http_file(url);
  });
  let output_parent = http_file_parent();
  await folder_unzip(output_parent);
}
