import { app_gs_bible_chapter_name } from "./app_gs_bible_chapter_name.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { noop } from "./noop.mjs";
import { app_share } from "./app_share.mjs";
import { html_bible_verse_navigation_next } from "./html_bible_verse_navigation_next.mjs";
export async function html_bible_verse_navigation_next_data(
  app_fn,
  context,
  book_code,
  chapter_code,
  verse_number_next,
) {
  let next = await new Promise(async function (resolve) {
    await html_bible_verse_navigation_next(
      app_share,
      book_code,
      chapter_code,
      verse_number_next,
      function (book_code, chapter, verse_number_next) {
        let v4 = resolve({
          book_code,
          chapter,
          verse_number_next,
        });
        return v4;
      },
      context,
      noop,
    );
  });
  let book_code_next = object_property_get(next, "book_code");
  let chapter_code_next = object_property_get(next, "chapter");
  let chapter_next = app_gs_bible_chapter_name(
    book_code_next,
    chapter_code_next,
  );
  verse_number_next = object_property_get(next, "verse_number_next");
  let v = {
    verse_number_next,
    book_code_next,
    chapter_code_next,
    chapter_next,
  };
  return v;
}
