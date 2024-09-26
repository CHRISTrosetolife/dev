import { log } from "./log.mjs";
import { each_async } from "./each_async.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
export async function bible_eng_versions_each(lambda) {
  let bible_folders = bible_eng_versions();
  await each_async(bible_folders, async (bible_folder) => {
    log({
      bible_folder,
    });
    await lambda(bible_folder);
  });
}
