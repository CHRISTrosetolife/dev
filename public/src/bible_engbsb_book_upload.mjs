import { bible_chapters } from "./bible_chapters.mjs";
import { bible_engbsb_chapter_upload } from "./bible_engbsb_chapter_upload.mjs";
export async function bible_engbsb_book_upload(book_name) {
  let chapters = await bible_chapters("engbsb", book_name);
  $er;
  await bible_engbsb_chapter_upload(chapters);
}
