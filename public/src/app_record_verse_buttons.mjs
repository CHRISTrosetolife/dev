import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button } from "./html_button.mjs";
import { html_hr } from "./html_hr.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { bible_book_chapter_text } from "./bible_book_chapter_text.mjs";
import { app_record_chapter_buttons } from "./app_record_chapter_buttons.mjs";
export function app_record_verse_buttons(
  context,
  book_code,
  chapter,
  on_verse,
) {
  let { root } = context;
  app_record_chapter_buttons(context, book_code, on_verse);
  let chapter_text = bible_book_chapter_text(book_code, chapter);
  html_button(
    root,
    string_combine_multiple([chapter_text, " choose verse"]),
    async function () {
      let v = await app_record_chapter(context, book_code, chapter, on_verse);
      return v;
    },
  );
  html_hr(root);
}
