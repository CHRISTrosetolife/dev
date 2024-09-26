import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
export async function bible_search() {
  let r = {};
  let v = bible_eng_versions();
  return await list_adder_async(async (la) => {
    await bible_books_chapter_each(bible_folder, function lambda(chapter_code) {
      la({
        book_code,
        chapter_code,
      });
    });
  });
}
