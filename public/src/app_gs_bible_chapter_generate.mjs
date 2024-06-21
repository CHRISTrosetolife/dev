import { string_case_lower } from "./string_case_lower.mjs";
import { generate_list_generic } from "./generate_list_generic.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  let verses = await bible_chapter("engbsb", chapter_name);
  chapter_name = string_case_lower(chapter_name);
  await generate_list_generic(filtered, name);
}
