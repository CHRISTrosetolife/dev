import { string_symbols_multiple } from "./string_symbols_multiple.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_wait } from "./list_wait.mjs";
import { list_map } from "./list_map.mjs";
import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { list_chunk_each } from "./list_chunk_each.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_bible_search_upload() {
  let i = await bible_search_index_cache();
  let properties = object_properties(i);
  let s = string_symbols_multiple(properties);
  return s;
  await list_chunk_each(properties, async (chunk) => {
    let mapped = list_map(chunk, async (word) => {
      let value = object_property_get(i, word);
      await bible_storage_version_upload("search", word, value);
    });
    await list_wait(mapped);
  });
}
