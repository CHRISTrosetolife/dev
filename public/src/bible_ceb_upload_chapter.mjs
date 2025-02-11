import { path_join } from "./path_join.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { bible_word_map } from "./bible_word_map.mjs";
import { list_map } from "./list_map.mjs";
import { list_flatten } from "./list_flatten.mjs";
import { bible_storage_interlinear_chapter_definitions_name } from "./bible_storage_interlinear_chapter_definitions_name.mjs";
import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { bible_storage_interlinear_chapter_definitions_property } from "./bible_storage_interlinear_chapter_definitions_property.mjs";
import { list_to_lookup_value_async } from "./list_to_lookup_value_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { object_merge_strict } from "./object_merge_strict.mjs";
export async function bible_ceb_upload_chapter(bible_folder, chapter_code) {
  let chapter = await bible_chapter(bible_folder, chapter_code);
  let tokens_all = list_flatten(list_map_property(chapter, "tokens"));
  let mapped = list_map(tokens_all, bible_word_map);
  let unique = list_unique(mapped);
  let filtered = list_filter(unique, null_not_is);
  let definitions = await list_to_lookup_value_async(filtered, async (u) => {
    let d = await ceb_definition(u);
    let result = {
      [bible_storage_interlinear_chapter_definitions_property()]:
        object_property_get(d, "definitions"),
    };
    let word = object_property_get(d, "word");
    if (word !== u) {
      object_merge_strict(result, {
        root: word,
      });
    }
    return result;
  });
  return definitions;
  await bible_storage_version_upload(
    path_join([bible_folder, chapter_name]),
    bible_storage_interlinear_chapter_definitions_name(),
    definitions,
  );
}
