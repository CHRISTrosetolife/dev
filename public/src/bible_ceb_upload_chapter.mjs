import { null_not_is } from "./null_not_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { ceb_definition } from "./ceb_definition.mjs";
import { bible_word_map } from "./bible_word_map.mjs";
import { list_map } from "./list_map.mjs";
import { list_flatten } from "./list_flatten.mjs";
import { bible_storage_interlinear_chapter_definitions_name } from "./bible_storage_interlinear_chapter_definitions_name.mjs";
import { bible_storage_interlinear_chapter_definitions_path } from "./bible_storage_interlinear_chapter_definitions_path.mjs";
import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { bible_storage_interlinear_chapter_definitions_property } from "./bible_storage_interlinear_chapter_definitions_property.mjs";
import { list_to_lookup_value_async } from "./list_to_lookup_value_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_ceb_upload_chapter(bible_version, chapter_code) {
  let chapter = await bible_chapter(bible_version, chapter_code);
  let tokens_all = list_flatten(list_map_property(chapter, "tokens"));
  let mapped = list_map(tokens_all, bible_word_map);
  let unique = list_unique(mapped);
  let filtered = list_filter(unique, null_not_is);
  let definitions = await list_to_lookup_value_async(unique, async (u) => ({
    [bible_storage_interlinear_chapter_definitions_property()]:
      await ceb_definition(u),
  }));
  return definitions;
  await bible_storage_version_upload(
    bible_storage_interlinear_chapter_definitions_path(book_code, chapter_code),
    bible_storage_interlinear_chapter_definitions_name(),
    definitions,
  );
}
