import { string_replace } from "./string_replace.mjs";
export function string_slashes_escape(input) {
  return string_replace(input, "\\", "\\\\");
}
