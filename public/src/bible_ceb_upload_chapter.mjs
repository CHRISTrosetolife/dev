import { object_property_set } from "./object_property_set.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { ceb_definition_2 } from "./ceb_definition_2.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_concat } from "./list_concat.mjs";
import { definition_bohol } from "./definition_bohol.mjs";
import { bible_storage_ceb_definitions_path } from "./bible_storage_ceb_definitions_path.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
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
import { list_first } from "./list_first.mjs";
export async function bible_ceb_upload_chapter(bible_version, chapter_code) {
  let chapter = await bible_chapter(bible_version, chapter_code);
  let tokens_all = list_flatten(list_map_property(chapter, "tokens"));
  let mapped = list_map(tokens_all, bible_word_map);
  let unique = list_unique(mapped);
  let filtered = list_filter(unique, null_not_is);
  let definitions = await list_to_lookup_value_async(filtered, async (u) => {
    let d2 = await ceb_definition_2(u);
    let word_definitions = object_property_initialize(d2, u, []);
    let d = await definition_bohol(u, "Cebuano", "English");
    let mapped2 = list_map(d, list_first);
    list_add_multiple(word_definitions, mapped2);
    unique = list_unique(word_definitions);
    object_property_set(word_definitions, "length", 0);
    if (word2 === u || list_empty_is(mapped2)) {
      let definitions2 = object_property_get(d2, "definitions");
      mapped2 = list_concat(mapped2, definitions2);
      mapped2 = list_unique(mapped2);
    }
    let result = {
      [bible_storage_interlinear_chapter_definitions_property()]: mapped2,
    };
    if (false) {
      let word = object_property_get(d, "word");
      if (word !== u) {
        object_merge_strict(result, {
          root: word,
        });
      }
    }
    return result;
  });
  await bible_storage_version_upload(
    bible_storage_ceb_definitions_path(bible_version, chapter_code),
    bible_storage_interlinear_chapter_definitions_name(),
    definitions,
  );
}
