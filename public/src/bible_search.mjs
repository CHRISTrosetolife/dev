import { bible_chapter } from "./bible_chapter.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { each_async } from "./each_async.mjs";
import { bible_eng_versions } from "./bible_eng_versions.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function bible_search() {
  let r = {};
  let bible_folders = bible_eng_versions();
  await each_async(bible_folders, async (bible_folder) => {
    let v = object_property_initialize(r, bible_folder, {});
    await bible_books_chapter_each(
      bible_folder,
      async function lambda(chapter_code) {
        await bible_chapter();
        object_property_set(v, chapter_code, v);
      },
    );
  });
}
