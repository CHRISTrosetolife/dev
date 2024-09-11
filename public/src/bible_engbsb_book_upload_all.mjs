import { bible_book_upload_all } from "./bible_book_upload_all.mjs";
export async function bible_engbsb_book_upload_all() {
  let version_code = "engbsb";
  await bible_book_upload_all(version_code);
}
