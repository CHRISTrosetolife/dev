import { bible_eng_versions_each } from "./bible_eng_versions_each.mjs";
import { bible_books_chapters } from "./bible_books_chapters.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { each_async } from "./each_async.mjs";
export async function bibles_eng_chapters() {
  return await list_adder_async(async (la) => {
    await bible_eng_versions_each(lambda);
    async function lambda(bible_folder) {
      let chapters = await bible_books_chapters(bible_folder);
      await each_async(chapters, async (c) => {
        let { chapter_code } = c;
        la(await bible_chapter(bible_folder, chapter_code));
      });
    }
  });
}
