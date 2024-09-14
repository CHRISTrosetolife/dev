import { bible_eng_versions_all } from "./bible_eng_versions_all.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_eng_versions_all_each(lambda) {
  let bible_folders = await bible_eng_versions_all();
  await each_async(bible_folders, lambda);
}
