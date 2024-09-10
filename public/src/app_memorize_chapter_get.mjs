import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
export function app_memorize_chapter_get(context) {
  let save = app_memorize_save_get(context);
  let { chapter } = save;
  return chapter;
}
