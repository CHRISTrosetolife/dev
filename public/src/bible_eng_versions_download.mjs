import { each_async } from "./each_async.mjs";
import { bible_eng_versions_new } from "./bible_eng_versions_new.mjs";
export async function bible_eng_versions_download() {
  let bible_folders = bible_eng_versions_new();
  await each_async(bible_folders, async (bible_folder) => {});
}
