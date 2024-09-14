import { list_remove_multiple } from "./list_remove_multiple.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { bible_eng_versions_all } from "./bible_eng_versions_all.mjs";
export async function bible_eng_versions_unused() {
  let bible_folders = await bible_eng_versions_all();
  let bible_folders_used = bible_eng_versions();
  list_remove_multiple(bible_folders, bible_folders_used);
  return bible_folders;
}
