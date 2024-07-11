import { file_rename } from "./file_rename.mjs";
import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { string_replace } from "./string_replace.mjs";
export async function video_concat(output_path, input_paths) {
  let output_path_2 = string_replace(output_path, " ", "_");
  await folder_parent_exists_ensure(output_path_2);
  await video_stitch
    .concat({
      silent: false,
      overwrite: true,
    })
    .clips(input_paths)
    .output(output_path_2)
    .concat();
  await file_rename(output_path_2, output_path);
}
