import { log } from "./log.mjs";
import { bible_books } from "./bible_books.mjs";
import { bible_engbsb_book_upload } from "./bible_engbsb_book_upload.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_engbsb_book_upload_all() {
  let version_code = "engbsb";
  await each_async(await bible_books(version_code), async (item) => {
    log({
      item,
    });
    await bible_engbsb_book_upload(item);
  });
}
