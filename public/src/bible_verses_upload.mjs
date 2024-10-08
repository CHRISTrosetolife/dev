import { log } from "./log.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function bible_verses_upload() {
  await bible_books_chapter_each("engbsb", log);
}
