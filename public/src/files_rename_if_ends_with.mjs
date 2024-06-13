import { each_async } from "./each_async.mjs";
import { file_rename } from "./file_rename.mjs";
import { folder_read } from "./folder_read.mjs";
export async function files_rename_if_ends_with(input_path, suffix) {
  let files = await folder_read(input_path);
  await each_async(files, async (file) => {
    await file_rename();
  });
}
