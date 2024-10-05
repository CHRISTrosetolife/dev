import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { each_object_async } from "./each_object_async.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
export async function app_bible_search_upload() {
  let i = await bible_search_index_cache();
  await each_object_async(i, async (word, value) => {
    await bible_storage_version_upload("search", word, value);
  });
}
