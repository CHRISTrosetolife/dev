import { bible_eng_versions_unused } from "./bible_eng_versions_unused.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_eng_versions_unused_each(lambda) {
  let bible_folders = await bible_eng_versions_unused();
  await each_async(bible_folders, lambda);
}
