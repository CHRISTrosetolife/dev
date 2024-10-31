import { folder_parent_exists_ensure } from "./folder_parent_exists_ensure.mjs";
import { folder_gitignore_path } from "./folder_gitignore_path.mjs";
import { bible_verses_upload_path } from "./bible_verses_upload_path.mjs";
import { storage_upload_object_gitignore } from "./storage_upload_object_gitignore.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
import { list_map } from "./list_map.mjs";
import { list_wait } from "./list_wait.mjs";
export async function bible_verses_upload(bible_folder) {
  await bible_books_chapter_each(bible_folder, async (chapter) => {
    let verses = await bible_chapter(bible_folder, chapter);
    ("seems to be a race condition; code errors when multiple threads create folder; therefore create folder outside of loop");
    await folder_parent_exists_ensure(
      folder_gitignore_path(
        bible_verses_upload_path(bible_folder, chapter, "1"),
      ),
    );
    let mapped = list_map(verses, async (verse) => {
      let { verse_number, tokens } = verse;
      let storage_path = bible_verses_upload_path(
        bible_folder,
        chapter,
        verse_number,
      );
      await storage_upload_object_gitignore(storage_path, {
        tokens,
      });
    });
    await list_wait(mapped);
  });
}
