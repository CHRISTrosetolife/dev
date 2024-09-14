import { list_find_property } from "./list_find_property.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { html_clear_scroll_top } from "./html_clear_scroll_top.mjs";
export function app_record_book_generic(
  context,
  lambda_top,
  book_code,
  app_record_book_on_click,
) {
  let { root } = context;
  html_clear_scroll_top(root);
  lambda_top();
  let { books } = context;
  let book = list_find_property(books, "book_code", book_code);
  each(book.chapters, (chapter) => {
    html_button_text_click(root, chapter, async () => {
      await app_record_book_on_click(context, book_code, chapter);
    });
  });
}
