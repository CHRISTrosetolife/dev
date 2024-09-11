import { bible_book_upload } from "./bible_book_upload.mjs";
export async function bible_engbsb_book_upload(book_name) {
  let bible_folder = "engbsb";
  await bible_book_upload(bible_folder, book_name);
}
