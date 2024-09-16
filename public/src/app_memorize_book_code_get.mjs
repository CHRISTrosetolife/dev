import { log } from "./log.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
export function app_memorize_book_code_get(context) {
  let save = app_memorize_save_get(context);
  log({
    save,
  });
  let { book_code } = save;
  return book_code;
}
