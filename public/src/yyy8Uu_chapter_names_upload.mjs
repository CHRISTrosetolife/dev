import { yyy8Uu_storage_path } from "./yyy8Uu_storage_path.mjs";
import { yyy8Uu_chapter_names } from "./yyy8Uu_chapter_names.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
export async function yyy8Uu_chapter_names_upload() {
  await storage_upload_object(
    {
      chapter_names: yyy8Uu_chapter_names(),
    },
    yyy8Uu_storage_path("chapter_names"),
  );
}
