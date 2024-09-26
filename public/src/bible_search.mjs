import { bible_search_lookup_version } from "./bible_search_lookup_version.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { each_async } from "./each_async.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
export async function bible_search() {
  let r = {};
  let bible_folders = bible_eng_versions();
  await each_async(bible_folders, async (bible_folder) => {
    let v = await bible_search_lookup_version(bible_folder);
    object_property_set(r, bible_folder, v);
  });
  return r;
}
