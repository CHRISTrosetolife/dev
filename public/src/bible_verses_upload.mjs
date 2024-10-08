import { bible_chapter } from "./bible_chapter.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function bible_verses_upload() {
  await bible_books_chapter_each("engbsb", async (chapter) => {
    let { book_code, chapter_code } = bible_chapter_name_parse(chapter);
    await bible_chapter(book_code, cha);
  });
}
