import { generate_list_generic } from "./generate_list_generic.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function app_gs_bible_chapter_generate(chapter_name) {
  let verses = await bible_chapter("engbsb", chapter_name);
  await generate_list_generic(filtered, name);
}
