import { log } from "./log.mjs";
import { html_button_text_click } from "./html_button_text_click.mjs";
import { each } from "./each.mjs";
import { list_find_property_or } from "./list_find_property_or.mjs";
import { app_record_home_button } from "./app_record_home_button.mjs";
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
  app_record_home_button(context);
  let { books } = context;
  let book = list_find_property_or(books, "book_code", book_code);
  log("here32");
  each(book.chapters, (chapter) => {
    html_button_text_click(root, chapter, async () => {
      log("here2");
      await app_record_book_on_click(context, book_code, chapter);
    });
  });
  debugger;
}
