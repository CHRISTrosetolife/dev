import { string_prefix_without } from "./string_prefix_without.mjs";
import { string_starts_with } from "./string_starts_with.mjs";
export function string_prefix_without_multiple(chapter_name, prefix) {
  while (string_starts_with(chapter_name, prefix)) {
    chapter_name = string_prefix_without(chapter_name, "0");
  }
  return chapter_name;
}
