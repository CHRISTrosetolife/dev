import { bible_engbsb_book_upload } from "./bible_engbsb_book_upload.mjs";
import { log } from "./log.mjs";
import { bible_books } from "./bible_books.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_book_upload_all(version_code) {
  await each_async(await bible_books(version_code), async (item) => {
    log({
      version_code,
      item,
    });
    await bible_engbsb_book_upload(item);
  });
}
