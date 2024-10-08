import { string_prefix_without_multiple } from "./string_prefix_without_multiple.mjs";
export function bible_chapter_unpadded(chapter_name_padded) {
  let prefix = "0";
  let chapter_name = string_prefix_without_multiple(
    chapter_name_padded,
    prefix,
  );
  return chapter_name;
}
