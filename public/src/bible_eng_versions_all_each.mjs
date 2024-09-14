import { bible_versions_list_english } from "./bible_versions_list_english.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_eng_versions_all_each(lambda) {
  let bible_folders = await bible_versions_list_english();
  await each_async(bible_folders, lambda);
}
