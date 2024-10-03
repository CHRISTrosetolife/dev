import { path_join } from "./path_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function app_sleep_month_path(year, month_padded) {
  return file_name_json(path_join(["sleep", year, month_padded]));
}
