import { storage_upload_object_gitignore } from "./storage_upload_object_gitignore.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
import { each_async } from "./each_async.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
import { path_join } from "./path_join.mjs";
export async function bible_verses_upload() {
  let bible_folder = "engbsb";
  await bible_books_chapter_each(bible_folder, async (chapter) => {
    let { book_code, chapter_code } = bible_chapter_name_parse(chapter);
    let verses = await bible_chapter(bible_folder, chapter);
    await each_async(verses, async (verse) => {
      let { verse_number } = verse;
      let key = path_join([book_code, chapter_code, verse_number]);
      let storage_path = bible_storage_path_file_version(key, bible_folder);
      return;
      await storage_upload_object_gitignore(storage_path, data);
    });
  });
}
