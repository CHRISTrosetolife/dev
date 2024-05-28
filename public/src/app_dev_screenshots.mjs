import { folder_files_move } from "./folder_files_move.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
export async function app_dev_screenshots(screen_name) {
  let folder_path = "C:\\Users\\JESUS\\Pictures\\Screenshots";
  let file_extension = ".png";
  await folder_files_move(
    folder_path,
    file_extension,
    string_combine_multiple([".\\public\\img\\"]),
  );
}
