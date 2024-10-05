import { each_object_async } from "./each_object_async.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { storage_upload_object_gitignore } from "./storage_upload_object_gitignore.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_bible_search_upload() {
  let i = await bible_search_index_cache();
  let words = object_properties(i);
  await each_object_async(i, async (item) => {});
  await storage_upload_object_gitignore();
}
