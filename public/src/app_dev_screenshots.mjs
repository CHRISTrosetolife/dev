import { path_join } from "./path_join.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { folder_files_copy } from "./folder_files_copy.mjs";
import { assert_message_json } from "./assert_message_json.mjs";
import { number_is } from "./number_is.mjs";
import { app_dev_screenshots_extension } from "./app_dev_screenshots_extension.mjs";
import { number_max_list } from "./number_max_list.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { path_parse_name } from "./path_parse_name.mjs";
import { folder_user } from "./folder_user.mjs";
import { string_combine } from "./string_combine.mjs";
import { folder_read } from "./folder_read.mjs";
import { folder_files_rename_incrementing } from "./folder_files_rename_incrementing.mjs";
import { app_name } from "./app_name.mjs";
import { app_dev } from "./app_dev.mjs";
import { folder_files_move } from "./folder_files_move.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { add_1 } from "./add_1.mjs";
export async function app_dev_screenshots(screen_name) {
  let folder_path = string_combine(folder_user(), "Pictures\\Screenshots");
  let file_extension = app_dev_screenshots_extension();
  let prefix = string_combine_multiple([
    "public\\img\\",
    app_name(app_dev),
    "\\",
    screen_name,
    "\\",
  ]);
  let target_path = string_combine_multiple([".\\", prefix]);
  let target_files = await folder_read(target_path, file_extension);
  let mapped = list_map(target_files, (file_path) => {
    let name = path_parse_name(file_path);
    let parsed = integer_parse(name);
    assert_message_json(number_is, [parsed], () => ({
      parsed,
      name,
      file_path,
    }));
    return parsed;
  });
  let starting = add_1(number_max_list(mapped));
  await folder_files_rename_incrementing(folder_path, file_extension, starting);
  await folder_files_copy(
    folder_path,
    file_extension,
    path_join([
      folder_path,
      "..",
      "screenshot_backups",
      date_string_iso_file(),
    ]),
  );
  await folder_files_move(folder_path, file_extension, target_path);
}
