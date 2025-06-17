import { folder_previous } from "./folder_previous.mjs";
import { app_name } from "./app_name.mjs";
import { folder_img_path } from "./folder_img_path.mjs";
import { files_rename_incrementing } from "./files_rename_incrementing.mjs";
import { assert_message } from "./assert_message.mjs";
import { assert } from "./assert.mjs";
import { number_max_list_or } from "./number_max_list_or.mjs";
import { path_join } from "./path_join.mjs";
import { date_string_iso_file } from "./date_string_iso_file.mjs";
import { folder_files_copy } from "./folder_files_copy.mjs";
import { number_is } from "./number_is.mjs";
import { app_dev_screenshots_extension } from "./app_dev_screenshots_extension.mjs";
import { integer_parse } from "./integer_parse.mjs";
import { path_parse_name } from "./path_parse_name.mjs";
import { folder_user } from "./folder_user.mjs";
import { string_combine } from "./string_combine.mjs";
import { folder_read } from "./folder_read.mjs";
import { app_dev } from "./app_dev.mjs";
import { folder_files_move } from "./folder_files_move.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { list_map } from "./list_map.mjs";
import { add_1 } from "./add_1.mjs";
import { string_empty_not_is } from "./string_empty_not_is.mjs";
export async function app_dev_screenshots(screen_name) {
  assert(string_empty_not_is, [screen_name]);
  let folder_path = string_combine(folder_user(), "Pictures\\Screenshots");
  let file_extension = app_dev_screenshots_extension();
  let prefix = string_combine_multiple([
    folder_img_path(),
    app_name(app_dev),
    "\\",
    screen_name,
    "\\",
  ]);
  let target_path = string_combine_multiple([".\\", prefix]);
  let target_files = await folder_read(target_path, file_extension);
  let mapped = list_map(target_files, function (file_path) {
    let name = path_parse_name(file_path);
    let parsed = integer_parse(name);
    assert_message(number_is, [parsed], function () {
      let v = {
        parsed,
        name,
        file_path,
      };
      return v;
    });
    return parsed;
  });
  let starting = add_1(number_max_list_or(mapped, 0));
  await folder_files_copy(
    folder_path,
    file_extension,
    path_join([
      folder_path,
      folder_previous(),
      "screenshot_backups",
      date_string_iso_file(),
    ]),
  );
  await files_rename_incrementing(folder_path, file_extension, starting);
  await folder_files_move(folder_path, file_extension, target_path);
}
