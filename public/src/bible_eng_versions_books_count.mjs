import { bible_books } from "./bible_books.mjs";
import { log } from "./log.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_eng_versions_books_count() {
  await bible_eng_versions_each(async (version_code) => {
    let books = await bible_books(bible_folder);
    let count = list_size(books);
    log({
      version_code,
      count,
    });
  });
}
