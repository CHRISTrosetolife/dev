import { bible_eng_versions_all } from "./bible_eng_versions_all.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_eng_versions_unused_each(lambda) {
  let bible_folders_all = await bible_eng_versions_all();
  await each_async(bible_folders_all, lambda);
}
