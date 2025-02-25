import { list_sort_string } from "./list_sort_string.mjs";
import { bible_storage_path_file_version } from "./bible_storage_path_file_version.mjs";
import { list_uniqueify } from "./list_uniqueify.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_property_initialize } from "./object_property_initialize.mjs";
import { ceb_definition_2 } from "./ceb_definition_2.mjs";
import { definition_bohol } from "./definition_bohol.mjs";
import { bible_storage_ceb_definitions_path } from "./bible_storage_ceb_definitions_path.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_word_map } from "./bible_word_map.mjs";
import { list_map } from "./list_map.mjs";
import { list_flatten } from "./list_flatten.mjs";
import { bible_storage_interlinear_chapter_definitions_name } from "./bible_storage_interlinear_chapter_definitions_name.mjs";
import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { list_to_lookup_value_async } from "./list_to_lookup_value_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
import { list_first } from "./list_first.mjs";
import { file_exists } from "./file_exists.mjs";
export async function bible_ceb_upload_chapter(bible_version, chapter_code) {
  let bible_folder = bible_storage_ceb_definitions_path(
    bible_version,
    chapter_code,
  );
  let key = bible_storage_interlinear_chapter_definitions_name();
  let storage_path = bible_storage_path_file_version(bible_folder, key);
  if (await file_exists(storage_path)) {
    return;
  }
  let chapter = await bible_chapter(bible_version, chapter_code);
  let tokens_all = list_flatten(list_map_property(chapter, "tokens"));
  let mapped = list_map(tokens_all, bible_word_map);
  let unique = list_unique(mapped);
  let filtered = list_filter(unique, null_not_is);
  let definitions = await list_to_lookup_value_async(
    filtered,
    async function (word) {
      let result = await ceb_definition_2(word);
      let word_definitions = object_property_initialize(result, word, []);
      let d = await definition_bohol(word, "Cebuano", "English");
      let mapped2 = list_map(d, list_first);
      list_add_multiple(word_definitions, mapped2);
      list_uniqueify(word_definitions);
      list_sort_string(word_definitions);
      return result;
    },
  );
  await bible_storage_version_upload(bible_folder, key, definitions);
}
