import { noop } from "./noop.mjs";
import { app_record_home_button } from "./app_record_home_button.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_record_book(context, book_code) {
  let lambda_top = noop;
  let app_record_book_on_click = app_record_chapter;
  let { root } = context;
  html_clear_scroll_top(root);
  app_record_home_button(context);
  let { books } = context;
  let book = list_find_property_or(books, "book_code", book_code);
  each(book.chapters, (chapter) => {
    html_button_text_click(root, chapter, async () => {
      await app_record_book_on_click(context, book_code, chapter);
    });
  });
}
