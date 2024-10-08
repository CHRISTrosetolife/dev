import { bible_chapter_unpadded } from "./bible_chapter_unpadded.mjs";
import { log } from "./log.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function bible_verses_upload() {
  await bible_books_chapter_each("engbsb", (chapter) => {
    let { book_code, chapter_code } = bible_chapter_name_parse(chapter);
    let chapter_name = bible_chapter_unpadded(chapter_name_padded);
    log({
      book_code,
      chapter_code,
    });
  });
}
