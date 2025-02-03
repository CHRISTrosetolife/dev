import { storage_upload_object_force } from "./storage_upload_object_force.mjs";
import { bible_storage_path_copyrights } from "./bible_storage_path_copyrights.mjs";
import { bible_eng_copyrights } from "./bible_eng_copyrights.mjs";
export async function bible_eng_copyrights_upload() {
  let copyrights = await bible_eng_copyrights();
  let destination = bible_storage_path_copyrights();
  await storage_upload_object_force(copyrights, destination);
}
