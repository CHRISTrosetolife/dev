import { bible_storage_path_copyrights } from "./bible_storage_path_copyrights.mjs";
import { bible_eng_copyrights } from "./bible_eng_copyrights.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
export async function bible_eng_copyrights_upload() {
  let copyrights = await bible_eng_copyrights();
  let destination = bible_storage_path_copyrights();
  await storage_upload_object(copyrights, destination);
}
