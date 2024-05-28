import { app_name } from "./app_name.mjs";
import { app_dev } from "./app_dev.mjs";
import { folder_files_move } from "./folder_files_move.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function app_dev_screenshots(screen_name) {
  let folder_path = "C:\\Users\\JESUS\\Pictures\\Screenshots";
  let file_extension = ".png";
  await folder_files_move(
    folder_path,
    file_extension,
    string_combine_multiple([
      ".\\public\\img\\",
      app_name(app_dev),
      "\\",
      screen_name,
    ]),
  );
}
