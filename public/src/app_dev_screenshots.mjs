import { folder_user } from "./folder_user.mjs";
import { string_combine } from "./string_combine.mjs";
import { assert } from "./assert.mjs";
import { folder_read } from "./folder_read.mjs";
import { folder_files_rename_incrementing } from "./folder_files_rename_incrementing.mjs";
import { app_name } from "./app_name.mjs";
import { app_dev } from "./app_dev.mjs";
import { folder_files_move } from "./folder_files_move.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export async function app_dev_screenshots(screen_name) {
  let folder_path = string_combine(folder_user(), "Pictures\\Screenshots");
  let file_extension = ".png";
  let target_path = string_combine_multiple([
    ".\\public\\img\\",
    app_name(app_dev),
    "\\",
    screen_name,
  ]);
  let target_files = await folder_read(target_path, file_extension);
  assert(list_empty_is, [target_files]);
  let starting = 1;
  await folder_files_rename_incrementing(folder_path, file_extension, starting);
  await folder_files_move(folder_path, file_extension, target_path);
}
