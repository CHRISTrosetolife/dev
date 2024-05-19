import { yyy8Uu_translate_upload } from "./yyy8Uu_translate_upload.mjs";
import { yyy8Uu_translate } from "./yyy8Uu_translate.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
import { folder_read } from "./folder_read.mjs";
export async function sandbox() {
    let file_paths = await folder_read('C:\\Users\\JESUS\\Pictures\\Screenshots', '');
    for (let file_path of file_paths) {
        
    }
    return;
  if (false) {
    await yyy8Uu_translate_upload();
  }
  let filtered = await yyy8Uu_translate();
  return;
  let result = await yyy8Uu_parts(index);
  return list;
  return;
  await each_index_async(filtered, async (file_path, index) => {
    await yyy8Uu_file_path_to_parts(filtered, index);
  });
}
