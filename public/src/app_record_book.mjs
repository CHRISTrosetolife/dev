import { app_record_book_generic } from "./app_record_book_generic.mjs";
import { noop } from "./noop.mjs";
import { app_record_chapter } from "./app_record_chapter.mjs";
export function app_record_book(context, book_code) {
  let lambda_top = noop;
  let app_record_book_on_click = app_record_chapter;
  app_record_book_generic(
    context,
    lambda_top,
    book_code,
    app_record_book_on_click,
  );
}
