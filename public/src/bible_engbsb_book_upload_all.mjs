import { bible_engbsb_book_upload } from "./bible_engbsb_book_upload.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_engbsb_book_upload_all() {
  await each_async(await bible_engbsb_book_upload(), async (item) => {});
}
