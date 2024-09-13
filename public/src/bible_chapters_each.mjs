import { log } from "./log.mjs";
import { bible_chapters } from "./bible_chapters.mjs";
import { each_async } from "./each_async.mjs";
export async function bible_chapters_each(bible_folder, book_code, lambda) {
  await each_async(
    await bible_chapters(bible_folder, book_code),
    async (chapter) => {
      log({
        bible_folder,
        chapter,
      });
      await lambda(chapter);
    },
  );
}
