import { html_button } from "./html_button.mjs";
import { bible_book_name_text } from "./bible_book_name_text.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
import { app_record_book } from "./app_record_book.mjs";
import { app_record_home_button } from "./app_record_home_button.mjs";
export function app_record_chapter_buttons(context, book_code, on_verse) {
  let { root } = context;
  html_clear_scroll_top(root);
  app_record_home_button(context, on_verse);
  html_button(
    root,
    bible_book_name_text(book_code),
    async () => await app_record_book(context, book_code, on_verse),
  );
}
