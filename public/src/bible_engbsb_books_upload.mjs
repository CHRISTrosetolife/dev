import { bible_chapter } from "./bible_chapter.mjs";
import { each_async } from "./each_async.mjs";
import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { bible_engbsb_storage_path_file } from "./bible_engbsb_storage_path_file.mjs";
import { storage_upload_object } from "./storage_upload_object.mjs";
import { bible_engbsb_chapter } from "./bible_engbsb_chapter.mjs";
export async function bible_engbsb_books_upload(chapter_name) {
  let data = await bible_engbsb_chapter(chapter_name);
  let chapters = await bible_books_chapters("engbsb");
  await each_async(chapters, async (c) => {
    let { chapter_name, book_name } = c;
    la(await bible_chapter(bible_folder, chapter_name));
  });
  let destination = bible_engbsb_storage_path_file("books");
  await storage_upload_object(data, destination);
}
