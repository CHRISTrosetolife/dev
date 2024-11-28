import { string_replace } from "./string_replace.mjs";
export function string_slash_normalize_right(file_path) {
  return string_replace(file_path, "\\", "/");
}
