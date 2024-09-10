import { app_memorize_save } from "./app_memorize_save.mjs";
import { app_memorize_save_get } from "./app_memorize_save_get.mjs";
import { object_property_delete_multiple } from "./object_property_delete_multiple.mjs";
import { object_merge } from "./object_merge.mjs";
export function app_memorize_chapter_set(context, chapter) {
  let save = app_memorize_save_get(context);
  object_merge(save, {
    chapter,
  });
  let properties = ["group_current", "pattern_index"];
  object_property_delete_multiple(save, properties);
  app_memorize_save(context);
}
