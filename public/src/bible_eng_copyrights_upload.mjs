import { storage_upload_object_bible_engbsb } from "./storage_upload_object_bible_engbsb.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
import { bible_copyright } from "./bible_copyright.mjs";
import { object_property_set } from "./object_property_set.mjs";
export async function bible_eng_copyrights_upload() {
  let copyrights = {};
  await bible_eng_versions_each(async function lambda(bible_folder) {
    let c = await bible_copyright(bible_folder);
    object_property_set(copyrights, bible_folder, c);
    return c;
  });
  let destination = bible_storage_path_file("copyrights");
  await storage_upload_object_bible_engbsb(copyrights, destination);
}
