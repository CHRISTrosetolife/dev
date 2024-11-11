import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { string_slash_encoded } from "./string_slash_encoded.mjs";
import { string_replace } from "./string_replace.mjs";
export function storage_url(file_path) {
  let replaced = string_replace(file_path, "/", string_slash_encoded());
  return string_combine_multiple([
    "https://firebasestorage.googleapis.com/v0/b/letjesusbeexalted.appspot.com/o/",
    replaced,
    "?alt=media",
  ]);
}
