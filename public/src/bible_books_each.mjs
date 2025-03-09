import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { log } from "./log.mjs";
import { bible_books } from "./bible_books.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_books_each(bible_folder, lambda) {
  assert_arguments_length(arguments, 2);
  await each_async(await bible_books(bible_folder), async function (book_name) {
    if (bible_folder === "frasbl" && book_name === "PS2") {
      log({
        bible_folder,
        book_name,
      });
    }
    await lambda(book_name);
  });
}
