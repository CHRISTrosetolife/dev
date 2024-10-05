import { list_take } from "./list_take.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { storage_upload_object_gitignore } from "./storage_upload_object_gitignore.mjs";
import { object_properties } from "./object_properties.mjs";
export async function app_bible_search_upload() {
  let i = await bible_search_index_cache();
  let p = object_properties(i);
  return list_take(p, 100);
  await storage_upload_object_gitignore();
}
