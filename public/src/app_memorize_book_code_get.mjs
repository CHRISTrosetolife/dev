import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
export function app_memorize_book_code_get(context) {
  let save = app_memorize_save_get(context);
  let { book_code } = save;
  let b = book_code;
  return b;
}
