import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { bible_eng_versions_all } from "./bible_eng_versions_all.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_eng_versions_unused_each(lambda) {
  let bible_folders_all = await bible_eng_versions_all();
  let bible_folders_used = await bible_eng_versions();
  list_remove_multiple(bible_folders_all, bible_folders_used);
  await each_async(bible_folders_all, lambda);
}
