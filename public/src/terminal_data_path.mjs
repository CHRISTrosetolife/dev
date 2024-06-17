import { terminal } from "./terminal.mjs";
import { string_combine } from "./string_combine.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
export function terminal_data_path() {
  return folder_gitignore_path(string_combine(terminal.name, ".json"));
}
