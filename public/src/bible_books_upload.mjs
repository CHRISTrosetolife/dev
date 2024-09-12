import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { string_prefix_without_multiple } from "./string_prefix_without_multiple.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { each_async } from "./each_async.mjs";
import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { bible_books_names_lookup } from "./bible_books_names_lookup.mjs";
export async function bible_books_upload(bible_folder) {
  let books = [];
  let lookup = await bible_books_names_lookup(bible_folder);
  let chapters = await bible_books_chapters(bible_folder);
  await each_async(chapters, async (c) => {
    let { chapter_code, book_code } = c;
    let book = list_find_property_or(books, "book_code", book_code, null);
    if (book === null) {
      book = {
        book_code,
        book_name: object_property_get(lookup, book_code),
        chapters: [],
      };
      list_add(books, book);
    }
    let chapter_name_padded = string_prefix_without(chapter_code, book_code);
    let prefix = "0";
    let chapter_name = string_prefix_without_multiple(
      chapter_name_padded,
      prefix,
    );
    list_add(book.chapters, chapter_name);
  });
  await bible_storage_version_upload(bible_folder, "books", {
    books,
  });
}
