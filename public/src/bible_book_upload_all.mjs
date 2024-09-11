import { bible_book_upload } from "./bible_book_upload.mjs";
import { log } from "./log.mjs";
import { bible_books } from "./bible_books.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_book_upload_all(bible_folder) {
  await each_async(await bible_books(bible_folder), async (item) => {
    log({
      bible_folder,
      item,
    });
    await bible_book_upload(bible_folder, book_name);
  });
}
