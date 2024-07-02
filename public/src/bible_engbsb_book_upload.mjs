import { bible_chapters } from "./bible_chapters.mjs";
import { bible_engbsb_chapter_upload } from "./bible_engbsb_chapter_upload.mjs";
export async function bible_engbsb_book_upload(book_name) {
  await bible_chapters("engbsb", book_name);
  bible_engbsb_chapter_upload;
}
