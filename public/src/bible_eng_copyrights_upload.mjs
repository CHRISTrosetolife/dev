import { bible_eng_copyrights } from "./bible_eng_copyrights.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { bible_storage_path } from "./bible_storage_path.mjs";
export async function bible_eng_copyrights_upload() {
  let copyrights = await bible_eng_copyrights();
  let destination = bible_storage_path("copyrights");
  await storage_upload_object(copyrights, destination);
}
