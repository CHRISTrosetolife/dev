import { html_button_width_full_text_click_home } from "./html_button_width_full_text_click_home.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_record_book(context, book_code) {
  let { root } = context;
  html_button_width_full_text_click_home;
  let { books } = context;
  let book = list_find_property_or(books, "book_code", book_code);
  html_clear_scroll_top(root);
  each(book.chapters, (chapter) => {
    html_button_text_click(root, chapter, async () => {
      await app_record_chapter(context, book_code, chapter);
    });
  });
}
