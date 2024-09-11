import { bible_engbsb_storage_path_file } from "./bible_engbsb_storage_path_file.mjs";
export async function storage_upload_object_bible_engbsb(key, data) {
  let destination = bible_engbsb_storage_path_file(key);
  await storage_upload_object_bible_engbsb(data, destination);
}
