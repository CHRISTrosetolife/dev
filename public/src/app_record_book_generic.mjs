import { app_memorize_chapter_get } from "./app_memorize_chapter_get.mjs";
import { html_style_success_if } from "./html_style_success_if.mjs";
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
  let chapter_selected = app_memorize_chapter_get(context);
  let { root } = context;
  html_clear_scroll_top(root);
  lambda_top();
  let { books } = context;
  let book = list_find_property(books, "book_code", book_code);
  each(book.chapters, (chapter) => {
    let b = html_button_text_click(root, chapter, async () => {
      await app_record_book_on_click(context, book_code, chapter);
    });
    html_style_success_if(b, chapter_selected, chapter);
  });
}
