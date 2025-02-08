import { string_replace } from "./string_replace.mjs";
export function folder_path_slash_forward(folder) {
  return string_replace(folder, "\\", "/");
}
