import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { bible_verses_upload_path } from "./bible_verses_upload_path.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { storage_upload_object_gitignore } from "./storage_upload_object_gitignore.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_chapter_name_parse } from "./bible_chapter_name_parse.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
import { list_map } from "./list_map.mjs";
import { list_wait } from "./list_wait.mjs";
export async function bible_verses_upload() {
  let bible_folder = "engbsb";
  await bible_books_chapter_each(bible_folder, async (chapter) => {
    let { book_code, chapter_code } = bible_chapter_name_parse(chapter);
    let verses = await bible_chapter(bible_folder, chapter);
    await folder_exists_ensure(folder_gitignore_path(storage_path));
    let mapped = list_map(verses, async (verse) => {
      let { verse_number, tokens } = verse;
      let storage_path = bible_verses_upload_path(
        book_code,
        chapter_code,
        verse_number,
        bible_folder,
      );
      await storage_upload_object_gitignore(storage_path, {
        tokens,
      });
    });
    await list_wait(mapped);
  });
}
