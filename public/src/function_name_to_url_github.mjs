import { url_repository } from "./url_repository.mjs";
import { folder_current_prefix } from "./folder_current_prefix.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { function_name_to_path } from "./function_name_to_path.mjs";
export function function_name_to_url_github(function_name) {
  let function_path = function_name_to_path(function_name);
  let trimmed = string_prefix_without(function_path, folder_current_prefix());
  let url = `${url_repository()}blob/master/${trimmed}`;
  return url;
}
