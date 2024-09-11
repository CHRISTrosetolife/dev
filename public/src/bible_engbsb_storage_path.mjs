import { bible_storage_path } from "./bible_storage_path.mjs";
import { string_combine } from "./string_combine.mjs";
export function bible_engbsb_storage_path() {
  return string_combine(bible_storage_path(), "engbsb/");
}
