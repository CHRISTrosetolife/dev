import { app_context_books_bible } from "./app_context_books_bible.mjs";
import { app_memorize_save } from "./app_memorize_save.mjs";
import { object_property_delete } from "./object_property_delete.mjs";
import { object_merge } from "./object_merge.mjs";
import { app_memorize_refresh_settings } from "./app_memorize_refresh_settings.mjs";
import { app_memorize_refresh_memorize_load } from "./app_memorize_refresh_memorize_load.mjs";
export async function app_memorize_refresh_memorize_load_settings(context) {
  object_merge(save, {
    version_code,
  });
  object_property_delete(context, "chapter_code");
  app_memorize_save(context);
  await app_context_books_bible(context);
  await app_memorize_refresh_memorize_load(context);
  await app_memorize_refresh_settings(context);
}
