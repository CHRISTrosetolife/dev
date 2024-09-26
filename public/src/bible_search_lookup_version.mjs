import { list_includes } from "./list_includes.mjs";
import { equal } from "./equal.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { bible_books_chapter_each } from "./bible_books_chapter_each.mjs";
export async function bible_search_lookup_version(bible_folder) {
  let v = {};
  await bible_books_chapter_each(
    bible_folder,
    async function lambda(chapter_code) {
      if (list_includes(bible_folder, ["eng-Brenton", "englxxup"])) {
        if (equal(chapter_code, "PRO30")) {
          return;
        }
      }
      let c = await bible_chapter(bible_folder, chapter_code);
      object_property_set(v, chapter_code, c);
    },
  );
  return v;
}
