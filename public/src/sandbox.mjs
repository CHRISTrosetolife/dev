import { add_1 } from "./add_1.mjs";
import { string_to } from "./string_to.mjs";
import { yyy8Uu_translate_upload } from "./yyy8Uu_translate_upload.mjs";
import { yyy8Uu_translate } from "./yyy8Uu_translate.mjs";
import { yyy8Uu_parts } from "./yyy8Uu_parts.mjs";
import { each_index_async } from "./each_index_async.mjs";
import { yyy8Uu_file_path_to_parts } from "./yyy8Uu_file_path_to_parts.mjs";
import { folder_read } from "./folder_read.mjs";
import { path_dirname } from "./path_dirname.mjs";
import { path_extname } from "./path_extname.mjs";
import { log } from "./log.mjs";
import { path_join } from "./path_join.mjs";
import { string_combine } from "./string_combine.mjs";
export async function sandbox() {
  let file_paths = await folder_read(
    "C:\\Users\\JESUS\\Pictures\\Screenshots",
    ".png",
  );
  await each_index_async(file_paths, async (file_path, index) => {
    let dirname = path_dirname(file_path);
    let extension = path_extname(file_path);
    log(
      path_join([dirname, string_combine(string_to(add_1(index)), extension)]),
    );
  });
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
