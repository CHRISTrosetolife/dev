import { object_property_delete_multiple } from "./object_property_delete_multiple.mjs";
import { object_merge } from "./object_merge.mjs";
export function app_memorize_chapter_set(save, chapter) {
  object_merge(save, {
    chapter,
  });
  let properties = ["group_current", "pattern_index"];
  object_property_delete_multiple(save, properties);
}
