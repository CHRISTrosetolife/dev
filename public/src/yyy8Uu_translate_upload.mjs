import { yyy8Uu_translate_upload_chapter } from "./yyy8Uu_translate_upload_chapter.mjs";
import { each_index_only_async } from "./each_index_only_async.mjs";
import { yyy8Uu_file_paths } from "./yyy8Uu_file_paths.mjs";
export async function yyy8Uu_translate_upload() {
  let filtered = await yyy8Uu_file_paths();
  await each_index_only_async(filtered, yyy8Uu_translate_upload_chapter);
}
