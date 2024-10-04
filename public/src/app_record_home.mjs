import { object_replace } from "./object_replace.mjs";
import { app_record } from "./app_record.mjs";
import { app_save_change } from "./app_save_change.mjs";
import { noop } from "./noop.mjs";
import { app_record_home_generic } from "./app_record_home_generic.mjs";
import { app_record_book } from "./app_record_book.mjs";
export async function app_record_home(context) {
  await app_save_change(app_record, (save) => object_replace(save, {}));
  let app_record_home_on_click = app_record_book;
  app_record_home_generic(context, noop, app_record_home_on_click, null);
}
