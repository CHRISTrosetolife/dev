import { assert_arguments_length } from "./assert_arguments_length.mjs";
import { log } from "./log.mjs";
import { bible_books } from "./bible_books.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_books_each(bible_folder, lambda) {
  assert_arguments_length(arguments, 2);
  await each_async(await bible_books(bible_folder), async (book_name) => {
    if (false) {
      log({
        bible_folder,
        book_name,
      });
    }
    await lambda(book_name);
  });
}
