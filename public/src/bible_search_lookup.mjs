import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
import { bible_search_lookup_version } from "./bible_search_lookup_version.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function bible_search_lookup() {
  let r = {};
  await bible_eng_versions_each(async (bible_folder) => {
    let v = await bible_search_lookup_version(bible_folder);
    object_property_set(r, bible_folder, v);
  });
  return r;
}
