import { app_gs_bible_chapter_generate } from "./app_gs_bible_chapter_generate.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export function app_gs_bible_chapter_prefix() {
  return string_suffix_without(app_gs_bible_chapter_generate.name, "generate");
}
