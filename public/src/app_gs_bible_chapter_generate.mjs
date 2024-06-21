import { string_case_lower } from "./string_case_lower.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { string_suffix_without } from "./string_suffix_without.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  let verses = await bible_chapter("engbsb", chapter_name);
  chapter_name = string_case_lower(chapter_name);
  let prefix = string_suffix_without(
    app_gs_bible_chapter_generate.name,
    "_generate",
  );
  await generate_list_generic(verses, `${prefix}${chapter_name}`);
}
