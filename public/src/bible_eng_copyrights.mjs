import { bible_chapter } from "./bible_chapter.mjs";
import { each_async } from "./each_async.mjs";
import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
export async function bible_eng_copyrights() {
  await bible_eng_versions_each(async function lambda(bible_folder) {
    let chapters = await bible_books_chapters(bible_folder);
    await each_async(chapters, async (c) => {
      let { chapter_code } = c;
      la(await bible_chapter(bible_folder, chapter_code));
    });
  });
}
