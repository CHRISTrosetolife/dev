import { bible_storage_interlinear_chapter_definitions_name } from "./bible_storage_interlinear_chapter_definitions_name.mjs";
import { bible_storage_interlinear_chapter_definitions_path } from "./bible_storage_interlinear_chapter_definitions_path.mjs";
import { bible_storage_version_upload } from "./bible_storage_version_upload.mjs";
import { bible_interlinear_definition } from "./bible_interlinear_definition.mjs";
import { bible_storage_interlinear_chapter_definitions_property } from "./bible_storage_interlinear_chapter_definitions_property.mjs";
import { list_to_lookup_value_async } from "./list_to_lookup_value_async.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_chapter } from "./bible_chapter.mjs";
export async function bible_ceb_upload_chapter(bible_version, chapter_code) {
  let chapter = await bible_chapter(bible_version, chapter_code);
  return chapter;
  let strongs = list_map_property(tokens, "strong");
  strongs = list_unique(strongs);
  let definitions = await list_to_lookup_value_async(strongs, async (s) => ({
    [bible_storage_interlinear_chapter_definitions_property()]:
      await bible_interlinear_definition(language, s),
  }));
  return;
  await bible_storage_version_upload(
    bible_storage_interlinear_chapter_definitions_path(book_code, chapter_code),
    bible_storage_interlinear_chapter_definitions_name(),
    definitions,
  );
}
