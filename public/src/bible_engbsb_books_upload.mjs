import { string_prefix_without_multiple } from "./string_prefix_without_multiple.mjs";
import { each_async } from "./each_async.mjs";
import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { bible_engbsb_storage_path_file } from "./bible_engbsb_storage_path_file.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { list_add } from "./list_add.mjs";
import { string_prefix_without } from "./string_prefix_without.mjs";
export async function bible_engbsb_books_upload() {
  let data = [];
  let chapters = await bible_books_chapters("engbsb");
  await each_async(chapters, async (c) => {
    let { chapter_code, book_code } = c;
    let book = list_find_property_or(data, "book_name", book_name, null);
    if (book === null) {
      book = {
        book_code,
        chapters: [],
      };
    }
    let chapter_name_padded = string_prefix_without(chapter_code, book_code);
    let prefix = "0";
    let chapter_name = string_prefix_without_multiple(
      chapter_name_padded,
      prefix,
    );
    list_add(book.chapters, chapter_name);
  });
  return data;
  let destination = bible_engbsb_storage_path_file("books");
  await storage_upload_object(data, destination);
}
