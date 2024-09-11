import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { bible_storage_path } from "./bible_storage_path.mjs";
export function bible_engbsb_storage_path() {
  return string_combine_multiple([bible_storage_path(), "engbsb/"]);
}
