import { app_record_book } from "./app_record_book.mjs";
import { bible_book_name } from "./bible_book_name.mjs";
import { string_combine_multiple } from "./string_combine_multiple.mjs";
import { html_button_width_full_text_click } from "./html_button_width_full_text_click.mjs";
import { app_record_home_button } from "./app_record_home_button.mjs";
export function app_record_chapter_buttons(context, book_code) {
  let { root } = context;
  html_clear_scroll_top(root);
  app_record_home_button(context);
  html_button_width_full_text_click(
    root,
    string_combine_multiple(["📖 ", bible_book_name(book_code)]),
    () => app_record_book(context, book_code),
  );
}
