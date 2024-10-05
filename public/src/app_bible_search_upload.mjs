import { log } from "./log.mjs";
import { bible_search_index_cache } from "./bible_search_index_cache.mjs";
import { storage_upload_object_gitignore } from "./storage_upload_object_gitignore.mjs";
export async function app_bible_search_upload() {
  let i = await bible_search_index_cache();
  log({
    i,
  });
  return i;
  await storage_upload_object_gitignore();
}
