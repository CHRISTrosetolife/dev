import { html_hr } from "./html_hr.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { bible_book_chapter_text } from "./bible_book_chapter_text.mjs";
import { app_record_chapter_buttons } from "./app_record_chapter_buttons.mjs";
export function app_record_verse_buttons(context, book_code, chapter, root) {
  app_record_chapter_buttons(context, book_code);
  let chapter_text = bible_book_chapter_text(book_code, chapter);
  html_button_width_full_text_click(
    root,
    chapter_text,
    async () => await app_record_chapter(context, book_code, chapter),
  );
  html_hr(root);
}
