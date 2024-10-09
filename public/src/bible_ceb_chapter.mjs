import { bible_chapter_foreign } from "./bible_chapter_foreign.mjs";
export async function bible_ceb_chapter(chapter_name) {
  let bible_folder = "cebulb";
  return await bible_chapter_foreign(chapter_name, bible_folder);
}
