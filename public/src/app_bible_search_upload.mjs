import { each_async } from "./each_async.mjs";
import { list_chunk_each } from "./list_chunk_each.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_bible_search_upload() {
  let i = await bible_search_index_cache();
  let properties = object_properties(i);
  await list_chunk_each(properties, async (chunk) => {
    await each_async(list, async (item) => {});
  });
  await each_object_async(i, async (word, value) => {});
}
