import { bible_books } from "./bible_books.mjs";
import { log } from "./log.mjs";
import { bible_book_upload_all } from "./bible_book_upload_all.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
export async function bible_eng_versions_books_count() {
  await bible_eng_versions_each(async (version_code) => {
    let books = await bible_books(bible_folder);
    log({
      c: books,
    });
    if (version_code === "engbsb") {
      return;
    }
    await bible_book_upload_all(version_code);
  });
}
