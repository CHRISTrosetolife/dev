import { app_record_home_button } from "./app_record_home_button.mjs";
import { app_record_book_generic } from "./app_record_book_generic.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
export function app_record_book(context, book_code) {
  let lambda_top = () => app_record_home_button(context);
  let app_record_book_on_click = app_record_chapter;
  app_record_book_generic(
    context,
    lambda_top,
    book_code,
    app_record_book_on_click,
  );
}
