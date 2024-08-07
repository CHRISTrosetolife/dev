import { app_record_book } from "./app_record_book.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_record_home(context) {
  let { root } = context;
  let { books } = context;
  html_clear_scroll_top(root);
  each(books, (book) => {
    let { book_code } = book;
    html_button_text_click(root, book_code, function () {
      app_record_book(context, book_code);
    });
  });
}
