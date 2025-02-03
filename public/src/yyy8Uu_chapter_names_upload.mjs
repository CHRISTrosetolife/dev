import { storage_upload_object_force } from "./storage_upload_object_force.mjs";
import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { yyy8Uu_chapter_names } from "./yyy8Uu_chapter_names.mjs";
export async function yyy8Uu_chapter_names_upload() {
  await storage_upload_object_force(
    {
      chapter_names: await yyy8Uu_chapter_names(),
    },
    yyy8Uu_storage_path("chapter_names"),
  );
}
