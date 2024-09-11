import { bible_engbsb_storage_path_file } from "./bible_engbsb_storage_path_file.mjs";
export async function storage_upload_object_bible_engbsb(chapter_name, data) {
  let destination = bible_engbsb_storage_path_file(chapter_name);
  await storage_upload_object_bible_engbsb(data, destination);
}
