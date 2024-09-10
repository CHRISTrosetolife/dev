import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
export function app_memorize_chapter_get(context) {
  let save = app_memorize_save_get(context);
  let { book_code } = save;
  return book_code;
}
