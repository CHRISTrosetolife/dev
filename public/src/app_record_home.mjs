import { noop } from "./noop.mjs";
import { app_record_home_generic } from "./app_record_home_generic.mjs";
import { app_record_book } from "./app_record_book.mjs";
export function app_record_home(context) {
  let app_record_home_on_click = app_record_book;
  app_record_home_generic(context, app_record_home_on_click, noop);
}
